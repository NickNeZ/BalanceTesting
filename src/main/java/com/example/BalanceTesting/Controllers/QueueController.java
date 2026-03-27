package com.example.BalanceTesting.Controllers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import redis.clients.jedis.*;


@RestController
@RequestMapping("/queue")
public class QueueController {
    private final JedisPool jedisPool =
            new JedisPool(new JedisPoolConfig(), "redis", 6379);

    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> stream() {

        return Flux.create(emitter -> {

            new Thread(() -> {
                try (Jedis jedis = jedisPool.getResource()) {

                    jedis.subscribe(new JedisPubSub() {
                        @Override
                        public void onMessage(String channel, String message) {
                            emitter.next(message);
                        }
                    }, "queue-events");

                }
            }).start();
        });
    }
}
