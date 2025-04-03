package teamchmod.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import teamchmod.backend.repositories.BudgetRepository;

@RestController
@RequestMapping("/budget")
@CrossOrigin
public class BudgetController {

    @Autowired
    BudgetRepository budgetRepository;

}
