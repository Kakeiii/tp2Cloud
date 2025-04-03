package teamchmod.backend.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teamchmod.backend.model.Users;
import teamchmod.backend.repositories.UsersRepository;
import teamchmod.backend.service.UsersService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UsersController {

    @Autowired
    UsersService usersService;

    @PostMapping("/signin/{username}/{mdp}")
    public boolean signin(@PathVariable String username, @PathVariable String mdp) {
        return usersService.login(username, mdp);
    }
    @GetMapping("/signing2")
    public boolean signin2(@RequestParam String username, @RequestParam String mdp) {
        return usersService.login(username, mdp);
    }
}
