//Clase principal de la aplicación Spring Boot

package com.example.blog_app;

import com.example.blog_app.model.Post;
import com.example.blog_app.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BlogAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogAppApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(PostRepository postRepository) {
		return args -> {
			postRepository.save(new Post("Post de bienvenida", "Este es el contenido inicial."));
			postRepository.save(new Post("Otra publicación", "Contenido de ejemplo número 2."));
		};
	}
}
