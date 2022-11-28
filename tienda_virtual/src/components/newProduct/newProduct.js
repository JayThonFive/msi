import React, { Fragment } from 'react';
import { useState } from "react";
import axios from "axios";

import '../../styles/login.css';


var urlApiService = 'http://localhost:3001/';

export function CreateProduct() {

    const [data, setDate] = useState({
        ID: "",
        Nombre: "",
        Descripcion: "",
        Valor: "",
        Stock: ""
    }
    )

    return (
        
        <Fragment>
            <center>
                <div id="divProductos">
                    <h3> Crear Productos </h3>
                    <label>Nombre
                        <input type="User" id="nombre" onChange={(e) => {
                            setDate({ ...data, Nombre: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Descripcion
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Descripcion: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Cantidad
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Stock: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Valor Unitario
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Valor: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={crearProductoMongo} >Crear Stock</button>
                </div>
            </center>
        </Fragment>
    );

    /* Funcion encargada de los productos en la base de datos  */
    function crearProductoMongo() {
        urlApiService = 'http://localhost:3001/createProducto'; 
        // Make a request for a user with a given ID
        axios.post(urlApiService,{nombre:data.Nombre,
                                  descripcion:data.Descripcion,
                                  cantidad:data.Stock,
                                  precio:data.Valor,
                                  foto:'',
                                  product_id: generaIdProducto()
                    }).then(function (response) {
            // handle success
            alert('Producto guardado con exito');
            console.log(response);
                    
        })
        .catch(function (error) {
            alert('No fue posible guardar el producto intente de nuevo más tarde ' + error);
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
            console.log('finalizó');
        });
    }   


    /* Funcion encargada de generar un aleatorio para registrar el id del producto.*/
    function generaIdProducto() {
        var fecha = new Date();
        var max = 10000;
        var min = 1;
        var aleatorio = Math.floor((Math.random() * (max - min + 1)) + min);        
        var fechaFormat = fecha.getFullYear() + '' + fecha.getMonth() + '' + fecha.getDate() + '' + fecha.getHours() + '' + fecha.getMinutes() + '' + fecha.getSeconds();
        var identificadorUnico = fechaFormat + '' + aleatorio;
        return identificadorUnico;

    }

    /*function crearProducto() {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "",
          };
          
        urlApiService = urlApiService + 'getProductos';
        // Make a request for a user with a given ID
        axios.get(urlApiService,{headers}).then(function (response) {
            // handle success
            console.log(response);
            response.render('newProduct.js');
                    
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
            console.log('finalizó');
        });
    }    */

}