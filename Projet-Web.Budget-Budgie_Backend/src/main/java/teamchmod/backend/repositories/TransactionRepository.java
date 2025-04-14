package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import teamchmod.backend.model.Transactions;

import java.util.List;
@Repository
public interface TransactionRepository extends JpaRepository<Transactions, Integer> {
}
