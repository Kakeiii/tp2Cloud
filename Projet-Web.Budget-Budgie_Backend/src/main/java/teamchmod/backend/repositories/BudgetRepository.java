package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import teamchmod.backend.model.Categories;

public interface BudgetRepository extends JpaRepository<Categories, Integer> {

}
