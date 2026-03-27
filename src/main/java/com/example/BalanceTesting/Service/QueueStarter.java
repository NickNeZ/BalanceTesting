package com.example.BalanceTesting.Service;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class QueueStarter {

    private final Producer producer;
    private final Consumer consumer;

    public QueueStarter(Producer producer, Consumer consumer) {
        this.producer = producer;
        this.consumer = consumer;
    }

    @PostConstruct
    public void start() {
        producer.start();
        consumer.start();
    }
}