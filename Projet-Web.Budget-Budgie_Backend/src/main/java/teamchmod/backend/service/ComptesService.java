package teamchmod.backend.service;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import teamchmod.backend.model.Comptes;
import teamchmod.backend.model.ComptesDTO;
import teamchmod.backend.model.*;
import teamchmod.backend.repositories.ComptesRepository;
import teamchmod.backend.repositories.UsersRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ComptesService {

    @Autowired
    ComptesRepository comptesRepository;

    public List<ComptesDTO> getAllComptes(Users utilisateur) {
        List<Comptes> list = comptesRepository.findAllByUtilisateurs(utilisateur);
        List<ComptesDTO> listDTO = new ArrayList<>();

        for (Comptes c : list) {
            ComptesDTO cdto = new ComptesDTO();
            cdto.setType(c.getType());
            cdto.setNom(c.getNom());
            cdto.setTotal(c.getTotal());

            listDTO.add(cdto);
        }
        return listDTO;
    }

    public String getValeurNette() {
        List<Comptes> list = comptesRepository.findAll();
        double total = 0;

        for (Comptes c : list) {
            total += c.getTotal();
        }
        return String.format("%.2f", total);
    }

}
