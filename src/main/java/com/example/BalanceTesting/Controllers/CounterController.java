package com.example.BalanceTesting.Controllers;

import com.example.BalanceTesting.Service.CounterService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class CounterController {
    private final CounterService counterService;

    public CounterController(CounterService counterService) {
        this.counterService = counterService;
    }

//    @GetMapping("/")
//    public Map<String, String> getCounters() {
//        return Map.of("counter",String.valueOf(counterService.IncrementAndGet()));
//    }

    @GetMapping("/inc")
    public Map<String, Serializable> incCounter() {

        String containerName = System.getenv("HOSTNAME");
        double count = counterService.increment("/");

        return Map.of(
                "cont", containerName,
                "count", count
        );
    }
}
