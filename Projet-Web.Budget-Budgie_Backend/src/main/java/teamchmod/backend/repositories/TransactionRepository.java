package teamchmod.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import teamchmod.backend.model.Transactions;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transactions, Integer> {
    public Transactions findById(int transactionId);
}
