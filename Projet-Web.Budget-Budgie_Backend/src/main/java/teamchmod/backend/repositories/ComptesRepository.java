package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teamchmod.backend.model.Comptes;
import teamchmod.backend.model.Users;

import java.util.List;
@Repository
public interface ComptesRepository extends JpaRepository<Comptes, Integer> {
    public List<Comptes> findAllByUtilisateurs(Users utilisateurs);
}
