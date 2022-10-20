package com.github.briciosvieir.agenda.api;

import com.github.briciosvieir.agenda.api.model.entity.Contato;
import com.github.briciosvieir.agenda.api.model.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {


	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}


	@Bean
	public CommandLineRunner commandLineRunner(@Autowired ContatoRepository repository){
		return args -> {

			Contato contato = new Contato();
			contato.setNome("Caio");
			contato.setEmail("fabricio@email.com");
			contato.setFavorito(false);
			repository.save(contato);
		};
	}
}
