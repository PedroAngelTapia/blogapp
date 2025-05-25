package com.example.blog_app.model;

import jakarta.persistence.*;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String contenido;

    // 🔹 Constructor vacío requerido por JPA
    public Post() {
    }

    // 🔹 Constructor con parámetros
    public Post(String titulo, String contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
    }

    // 🔹 Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }
}
