package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import teamchmod.backend.model.Comptes;

import java.util.List;

public interface ComptesRepository extends JpaRepository<Comptes, Integer> {
    public Comptes findNomById(int id);
    public Comptes findTypeById(int id);
    public Comptes findTotalById(int id);
}
