package teamchmod.backend.model;

import jakarta.persistence.*;

@Entity
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nom;
    private String type;

    @ManyToOne
    @JoinColumn(name = "userId")
    Users utilisateurs;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Users getUtilisateurs() {
        return utilisateurs;
    }

    public void setUtilisateurs(Users utilisateurs) {
        this.utilisateurs = utilisateurs;
    }
}
