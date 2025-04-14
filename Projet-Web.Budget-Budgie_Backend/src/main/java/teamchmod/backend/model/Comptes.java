package teamchmod.backend.model;

import jakarta.persistence.*;

@Entity
public class Comptes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String type;
    private String nom;
    private double total;

    @ManyToOne
    @JoinColumn(name = "userId")
    Users utilisateurs;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
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
}
