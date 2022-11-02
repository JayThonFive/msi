import { Component } from "react";


var heading = ['Id Producto', 'Nombre Producto','Descripcion Producto', 'Valor Unitario'];

//var body = conexion a un BD NOsq o sql o un arcgivo plano

var body =
    [
    ['PI-0001', 'Camiseta Mujer', 'Unidades dependiendo de tallas','36'],
    ['PI-0002', 'Camiseta Hombre', 'Unidades dependiendo de tallas','40'],
    ['PI-0003', 'Personalizacion tennis y chaquetas','valor varia dependiendo del diseño', '10'],
 
    ];


export function SalesList() {

    return (
        <>
            <h3>Lista de Ventas</h3>
            <br></br>
            <div >
                <Table heading={heading} body={body} />
            </div>
        </>
    );

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