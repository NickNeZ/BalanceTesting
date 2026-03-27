package com.example.BalanceTesting.Service;

import org.springframework.stereotype.Service;
import redis.clients.jedis.*;

import java.util.Random;

@Service
public class Producer {
    private final JedisPool jedisPool =
            new JedisPool(new JedisPoolConfig(), "redis", 6379);

    private static final String INPUT = "input_queue";
    private final Random random = new Random();

    public void start() {
        new Thread(() -> {
            while (true) {
                try (Jedis jedis = jedisPool.getResource()) {

                    String msg = "msg-" + random.nextInt(1000);
                    jedis.lpush(INPUT, msg);
                    System.out.println("Produced: " + msg);
                    Thread.sleep(random.nextInt(2000));

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }
}
