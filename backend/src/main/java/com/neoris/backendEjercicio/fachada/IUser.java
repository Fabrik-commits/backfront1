package com.neoris.backendEjercicio.fachada;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

import com.neoris.backendEjercicio.model.User;

@Component
public interface IUser {

	public void save(User user);
	
	public ArrayList<User> getAllUsers();
}
