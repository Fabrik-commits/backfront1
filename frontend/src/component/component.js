import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import USER from '../model/user';
import "./componente.css";

export default function Componente() {
  const { register, handleSubmit, errors } = useForm();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDNI] = useState(Number);

  async function data () {
    USER.nombre = nombre;
    USER.apellido = apellido;
    USER.dni = dni;
    await axios.post('http://localhost:8080/save', USER).then(res => console.log(res.data))
  };

  async function obtenerUsers () {
    
    await axios.get('http://localhost:8080/getAll').then(res => console.log(res.data))
  };

  return (
      <div className="row h-100 justify-content-center align-items-center">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <form onSubmit={handleSubmit(data)}>
              <div className="form-group">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <label>Nombre</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      onChange={(e) => setNombre(e.target.value)}
                      className="form-control form-control-sm"
                      ref={register({ required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <label>Apellido</label>
                  <input
                    id="apellido"
                    type="text"
                    name="apellido"
                    onChange={(e) => setApellido(e.target.value)}
                    className="form-control form-control-sm"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <label>DNI</label>
                  <input
                    id="dni"
                    type="number"
                    name="dni"
                    onChange={(e) => setDNI(e.target.value)}
                    className="form-control form-control-sm"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <br />
              <div className="">
                <div className="col-md-12">
                  <div className="row justify-content-center">
                    <div className="button">
                      <input
                        type="submit"
                        value="Mandar info"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="col-md-12">
                  <div className="row justify-content-center">
                    <div className="button">
                      <input
                        onClick={obtenerUsers}
                        type="button"
                        value="Mandar Lista"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
            </div>

          </div>
        </div>
      </div>
  );
}
