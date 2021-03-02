package com.neoris.backendEjercicio.model;

import org.springframework.stereotype.Component;

@Component
public class User {
	private String nombre;
	private String apellido;
	private int dni;
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public int getDni() {
		return dni;
	}
	public void setDni(int dni) {
		this.dni = dni;
	}
	
	@Override
	public String toString() {
		return "User [nombre=" + nombre + ", apellido=" + apellido + ", dni=" + dni + "]";
	}
}
