package teamchmod.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import teamchmod.backend.model.Comptes;
import teamchmod.backend.model.Transactions;
import teamchmod.backend.repositories.ComptesRepository;
import teamchmod.backend.repositories.TransactionRepository;
import teamchmod.backend.repositories.UsersRepository;

import java.util.List;

@RestController
@RequestMapping("/comptes")
@CrossOrigin
public class ComptesController {

    @Autowired
    ComptesRepository comptesRepository;

    @GetMapping("/getNomById")
    public String getNomById(int id) {
        Comptes cd = comptesRepository.findNomById(id);
        return cd.getNom();
        // http://www.localhost:8888/comptes/getNomById?id=1
    }

    @GetMapping("/getTypeById")
    public String getTypeById(int id) {
        Comptes cd = comptesRepository.findTypeById(id);
        return cd.getType();
        // http://www.localhost:8888/comptes/getTypeById?id=1
    }

    @GetMapping("/getTotalById")
    public Double getTotalById(int id) {
        Comptes cd = comptesRepository.findTotalById(id);
        return cd.getTotal();
        // http://www.localhost:8888/comptes/getTotalById?id=1
    }

    @GetMapping("/tous")
    public List<Comptes> tous() { return comptesRepository.findAll(); }
}
