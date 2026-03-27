package com.example.BalanceTesting.Controllers;

import com.example.BalanceTesting.Service.CounterService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/stats")
public class StatsController  {
    private final CounterService counterService;

    public StatsController(CounterService counterService) {
        this.counterService = counterService;
    }

    @GetMapping("/top")
    public Map<String, Object> top() {
        return counterService.getTop();
    }

    @GetMapping("/leaderboard")
    public List<Map<String, Object>> leaderboard() {

        return counterService.getAll();
    }
}
