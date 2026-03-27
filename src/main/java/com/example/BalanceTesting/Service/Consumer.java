package com.example.BalanceTesting.Service;

import org.springframework.stereotype.Service;
import redis.clients.jedis.*;

@Service
public class Consumer {
    private final JedisPool jedisPool =
            new JedisPool(new JedisPoolConfig(), "redis", 6379);

    private static final String INPUT = "input_queue";
    private static final String OUTPUT = "output_queue";

    public void start() {
        new Thread(() -> {
            while (true) {
                try (Jedis jedis = jedisPool.getResource()) {

                    var result = jedis.brpop(0, INPUT);
                    String msg = result.get(1);
                    String processed = "[DONE] " + msg.toUpperCase();
                    jedis.lpush(OUTPUT, processed);
                    jedis.publish("queue-events", processed);
                    System.out.println("Processed: " + processed);

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }
}
