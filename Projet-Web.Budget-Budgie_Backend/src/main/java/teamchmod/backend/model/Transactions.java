package teamchmod.backend.model;

import jakarta.persistence.*;

@Entity
public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String detail;
    private String date;
    private double total;

    @ManyToOne
    @JoinColumn(name = "userId")
    Users utilisateurs;

    @ManyToOne
    @JoinColumn(name = "compteId")
    Comptes comptes;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    Categories categories;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
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

    public teamchmod.backend.model.Comptes getComptes() {
        return comptes;
    }

    public void setComptes(teamchmod.backend.model.Comptes comptes) {
        comptes = comptes;
    }

    public teamchmod.backend.model.Categories getCategories() {
        return categories;
    }

    public void setCategories(teamchmod.backend.model.Categories categories) {
        categories = categories;
    }


}
