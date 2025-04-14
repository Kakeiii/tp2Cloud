package teamchmod.backend.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teamchmod.backend.model.Transactions;
import teamchmod.backend.model.Users;
import teamchmod.backend.repositories.TransactionRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transactions")
@CrossOrigin
public class TransactionController {

    @Autowired
    TransactionRepository transactionRepository;

    @GetMapping("/viewTransaction/{id}")
    public Optional<Transactions> getViewTransaction(@PathVariable int id) {
        return transactionRepository.findById(id);
    }

    @GetMapping("/tous")
    public List<Transactions> tous() { return transactionRepository.findAll(); }

}
