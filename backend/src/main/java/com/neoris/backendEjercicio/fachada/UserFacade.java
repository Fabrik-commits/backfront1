package com.neoris.backendEjercicio.fachada;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.neoris.backendEjercicio.model.User;
import com.neoris.backendEjercicio.model.UsuarioCuenta;

@Qualifier
public class UserFacade implements IUser {
	

	ArrayList<User> userList;

	public UserFacade() {
		this.userList  = new ArrayList();
	}
	

	

	@Override
	public void save(User user) {
		this.userList.add(user);
		
	}

	@Override
	public ArrayList<User> getAllUsers() {
		// TODO Auto-generated method stub
		return this.userList;
	}

	//	public void saveDataDeposito( UsuarioDeposito user) {
//		this.userList.add(user);
//	}
}
