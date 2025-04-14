package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teamchmod.backend.model.Categories;
@Repository
public interface BudgetRepository extends JpaRepository<Categories, Integer> {

}
