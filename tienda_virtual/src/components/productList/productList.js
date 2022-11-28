import React, { Component  } from "react";
import '../../styles/Tabla.css';
//import {productListController} from '../../components/productList/productListController.js';
import axios from "axios";

//var heading = ['Id Producto', 'Nombre Producto','Descripcion Producto', 'Valor Unitario','Stock'];
var heading = ['Id Producto', 'Nombre Producto','Descripcion Producto', 'Valor Unitario'];

var urlApiService = 'http://localhost:3001/';

//var body = conexion a un BD NOsq o sql o un arcgivo plano
console.log('1. Inicia el proceso::::::::::::::::::::::::: ');
//Invocamos el servicio que retorna los datos de MongoDB
//var body = consultarProductos();
console.log('7. Valor Body asignado::::::::::::::::::::::::: ' + body);
var body = [['202210251557394440','Nuevo','2','12000'],['20221025164433317','Camisa','2','12000'],['20221025168548068','Pantalon','2','12000'],['202210251617491229','Blusa','2','15000'],['202210251638349744','Blusa','2','15000'],['202210251718354071','Salsa tomate','15','25000'],] ;
    /*var body = [
        ['PI-0001', 'Camiseta Mujer', 'Unidades dependiendo de tallas','70000','100'],
        ['PI-0002', 'Camiseta Hombre', 'Unidades dependiendo de tallas','70000','100'],
        ['PI-0003', 'Personalizacion tennis y chaquetas','valor varia dependiendo del diseño', '120000','40'],
    ];*/
export function ProductList() {
    return (
        <>
            <h3>Lista de Productos</h3>
            <br></br>
            <div >
                <Table heading={heading} body={body} />
            </div>
        </>
    );

}

function consultarProductos() {
    console.log('2. Ingresa a la función:::::::::::::::::::::::::: ');
    var dataLista = '';
    const headers = {
        "Content-Type": "application/json",
        Authorization: "",
      };
      
    urlApiService = 'http://localhost:3001/getProductos';
    // Make a request for a user with a given ID
    console.log('3. Previa axios :::::::::::::::::::::::::: ');
    axios.get(urlApiService,{headers}).then(function (response) {
        // handle success
        var dataStr = JSON.stringify(response.data.data);
        let parsedBody = JSON.parse(dataStr);
        console.log('4. Declara variables axios :::::::::::::::::::::::::: ');
        
        for ( let producto in parsedBody) {
            
            dataLista = dataLista + "['"+ parsedBody[producto]['product_id'] + "','" + 
                                         parsedBody[producto]['nombre'] + "','" + 
                                         parsedBody[producto]['cantidad'] + "','" + 
                                         parsedBody[producto]['precio'] + "'],";
        }
        console.log('5. Post LOOP axios :::::::::::::::::::::::::: ');
        dataLista = '['+dataLista+']';
        console.log('6. Finaliza trnasformación: ' + dataLista);
        //body = dataLista;
        return parsedBody;
        //console.log('Supero el return::::::::::::::::::::: nasformación: ');
                
    })
    .catch(function (error) {
        // handle error
        console.log('1E. EROOR :::::::::::::::::::::::::: ');
        console.log(error);
    })
    .finally(function () {
        // always executed
        console.log('1F finalizó');
        //bodyData = dataLista;
        //return dataLista;
    });
} 

class Table extends Component {
    
    render() {

       //Vector y formatearlos para que react los conozca y los trate coomo un map
       //Map Coleecion no lineal
        var heading = this.props.heading;
        var body = this.props.body;
        
        return (
            <div id="datagrid">
                <table>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>


            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}