package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teamchmod.backend.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
    public Users findByUsernameAndMdp(String username, String mdp);
    public Users findById(int id);
}
