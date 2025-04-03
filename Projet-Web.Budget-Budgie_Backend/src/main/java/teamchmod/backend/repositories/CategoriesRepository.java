package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import teamchmod.backend.model.Categories;

public interface CategoriesRepository extends JpaRepository<Categories, Integer> {

    public Categories findNomById(int id);
    public Categories findTypeByNom(String nom);
}
