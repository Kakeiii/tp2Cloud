package teamchmod.backend.service;

import org.springframework.stereotype.Service;
import teamchmod.backend.model.Users;
import teamchmod.backend.repositories.UsersRepository;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public boolean login(String username, String mdp) {
        Users user = usersRepository.findByUsername(username);
        return user.getUsername().equals(username) && user.getMdp().equals(mdp);
    }

}
