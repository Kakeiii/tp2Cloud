package teamchmod.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import teamchmod.backend.model.Categories;
import teamchmod.backend.model.Comptes;
import teamchmod.backend.repositories.CategoriesRepository;
import teamchmod.backend.repositories.ComptesRepository;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoriesController {

    @Autowired
    CategoriesRepository categoriesRepository;

    @GetMapping("/getNomById")
    public String getNomById(int id) {
        Categories categories = categoriesRepository.findNomById(id);
        return categories.getNom();
        // http://www.localhost:8888/categories/getNomById?id=1
    }

    @GetMapping("/getTypeByNom")
    public String getTypeByNom(String nom) {
        Categories categories = categoriesRepository.findTypeByNom(nom);
        return categories.getType();
        // http://www.localhost:8888/categories/getTypeByNom?nom=Loyer
    }

    @GetMapping("/tous")
    public List<Categories> tous() {
        return categoriesRepository.findAll();
    }
}