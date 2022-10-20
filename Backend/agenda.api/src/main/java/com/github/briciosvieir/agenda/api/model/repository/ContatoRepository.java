package com.github.briciosvieir.agenda.api.model.repository;

import com.github.briciosvieir.agenda.api.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato,Integer> {
}
