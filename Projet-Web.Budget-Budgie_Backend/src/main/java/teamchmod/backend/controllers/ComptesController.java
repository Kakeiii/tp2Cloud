package teamchmod.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teamchmod.backend.model.ComptesDTO;
import teamchmod.backend.model.Users;
import teamchmod.backend.service.ComptesService;

import java.util.List;

@RestController
@RequestMapping("/comptes")
@CrossOrigin
public class ComptesController {

    @Autowired
    ComptesService comptesService;

    @GetMapping("/getTest/{utilisateur}")
    public List<ComptesDTO> getAll(@PathVariable Users utilisateur) {
        return comptesService.getAllComptes(utilisateur);
    }

    @GetMapping("/getTotal")
    public String getTotal() {
        return comptesService.getValeurNette();
    }




}
