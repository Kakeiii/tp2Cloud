package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import teamchmod.backend.model.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    public Users findByUsername(String username);
}
