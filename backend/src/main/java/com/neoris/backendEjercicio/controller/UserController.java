package com.neoris.backendEjercicio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neoris.backendEjercicio.fachada.IUser;
import com.neoris.backendEjercicio.fachada.UserFacade;
import com.neoris.backendEjercicio.model.User;
import com.neoris.backendEjercicio.model.UsuarioCuenta;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private IUser facade;

	@PostMapping(value = "save")
	public ResponseEntity saveData(@RequestBody User user) { // intentar genera una instancia de la clase que le pongan en el request body ( pero como es bstracto va a explotar) 
		this.facade.save(user);
		return ResponseEntity.ok("guardo OK");
	}

	@GetMapping(value = "getAll")
	public ResponseEntity<Iterable<User>> getUsers() {

		return ResponseEntity.ok(this.facade.getAllUsers());
	}
}
