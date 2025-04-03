package teamchmod.backend.model;

import jakarta.persistence.*;

@Entity
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String date;
    private double total;

    @ManyToOne
    @JoinColumn(name="userId")
    Users utilisateurs;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    Categories categories;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public Users getUtilisateurs() {
        return utilisateurs;
    }

    public void setUtilisateurs(Users utilisateurs) {
        this.utilisateurs = utilisateurs;
    }

    public Categories getCategories() {
        return categories;
    }

    public void setCategories(Categories categories) {
        this.categories = categories;
    }
}
