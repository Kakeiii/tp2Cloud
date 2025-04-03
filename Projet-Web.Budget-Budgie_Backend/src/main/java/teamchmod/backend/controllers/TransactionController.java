package teamchmod.backend.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teamchmod.backend.model.Transactions;
import teamchmod.backend.repositories.TransactionRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/transactions")
@CrossOrigin
public class TransactionController {

    @Autowired
    TransactionRepository transactionRepository;

    @GetMapping("/getById")
    public Transactions getById(int id) {
        Transactions transactions = transactionRepository.findById(id);
        return transactions;
        // http://www.localhost:8888/transactions/getById?id=1
    }

    @GetMapping("/tous")
    public List<Transactions> tous() { return transactionRepository.findAll(); }

}
