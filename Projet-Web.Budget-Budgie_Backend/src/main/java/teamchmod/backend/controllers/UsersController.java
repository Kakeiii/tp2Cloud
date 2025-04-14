package teamchmod.backend.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import teamchmod.backend.model.Users;
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
    public Users signin(@PathVariable String username, @PathVariable String mdp) {
        return usersService.login(username, mdp);
    }

    @GetMapping("/viewUser/{id}")
    public Users getUser(@PathVariable int id) {
        return usersService.viewUser(id);
    }

    @GetMapping("/viewAll")
    public List<Users> getAllUsers() {
        return usersService.viewAllUsers();
    }
}
