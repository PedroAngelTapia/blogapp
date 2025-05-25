//Interfaz que extiende JpaRepository para manejar las operaciones CRUD de la entidad Post
package com.example.blog_app.repository;

import com.example.blog_app.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
