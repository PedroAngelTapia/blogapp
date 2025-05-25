package com.example.blog_app.service;

import com.example.blog_app.model.Post;
import com.example.blog_app.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository repository;

    @Autowired
    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Post> findAll() {
        return repository.findAll();
    }

    public Post findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Publicación no encontrada"));
    }

    public Post save(Post post) {
        return repository.save(post);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("No existe la publicación con id: " + id);
        }
        repository.deleteById(id);
    }
}
