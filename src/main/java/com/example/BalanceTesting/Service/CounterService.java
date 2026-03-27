package com.example.BalanceTesting.Service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;
import redis.clients.jedis.resps.Tuple;

@Service
public class CounterService {

//    private final AtomicInteger counter = new AtomicInteger(0);
//
//    public int IncrementAndGet() {
//        return counter.incrementAndGet();
//    }

    private final JedisPool jedisPool =
            new JedisPool(new JedisPoolConfig(), "redis", 6379);

    private static final String KEY = "endpoint_leaderboard";

    private final String containerName = System.getenv("HOSTNAME");

    public double increment(String endpoint) {
        String member = containerName + ":" + endpoint;
        try (Jedis jedis = jedisPool.getResource()) {
            return jedis.zincrby(KEY, 1, member);
        }
    }

    public Map<String, Object> getTop() {
        try (Jedis jedis = jedisPool.getResource()) {
            List<Tuple> tuples =
                    jedis.zrevrangeWithScores(KEY, 0, 0);

            if (tuples.isEmpty()) {
                return Map.of("message", "no data");
            }

            Tuple t = tuples.getFirst();

            return Map.of(
                    "endpoint", t.getElement(),
                    "count", t.getScore()
            );
        }
    }

    public List<Map<String, Object>> getAll() {

        try (Jedis jedis = jedisPool.getResource()) {

            List<Tuple> tuples =
                    jedis.zrevrangeWithScores(KEY, 0, -1);
            List<Map<String, Object>> result = new ArrayList<>();

            for (Tuple t : tuples) {

                result.add(Map.of(
                        "endpoint", t.getElement(),
                        "count", t.getScore()
                ));
            }

            return result;
        }
    }

}
