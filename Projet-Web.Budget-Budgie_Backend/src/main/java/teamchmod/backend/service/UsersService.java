package teamchmod.backend.service;

import org.springframework.stereotype.Service;
import teamchmod.backend.model.Users;
import teamchmod.backend.repositories.UsersRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public Users login(String username, String mdp) {
        return usersRepository.findByUsernameAndMdp(username, mdp);
    }

    public Users viewUser(int id) {
        return usersRepository.findById(id);
    }

    public List<Users> viewAllUsers() {
        return usersRepository.findAll();
    }

}
