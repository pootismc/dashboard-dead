import React, {Component} from 'react'
import "../assets/css/dataPanels.css"

class Product extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            arrayProductos: 0,
            arrayProductos2: [],
            loading: true,
            }
        }

    apiCall(url, c) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                c(data)
                this.setState({
                    loading: false,
                })
            })
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("https://dead-fellas.herokuapp.com/api/product", this.totalProductos);
        }
        
        totalProductos = (data) => {
            this.setState({
                arrayProductos: data.data.length,
                arrayProductos2: data.data
            })} 

    render() {
     if (this.state.loading) {
         return "loading"
     }
    return (
        <div className = "divSimple">
            <h2 className = "miniDiv">Ultimo producto creado</h2>
            <br></br>
            <h4>Producto:</h4>
            <span>{this.state.arrayProductos2[this.state.arrayProductos-1].name}</span>
            <br></br>
            <h4>Precio:</h4>
            <span>{this.state.arrayProductos2[this.state.arrayProductos-1].price}</span>
            <br></br>
            <h4>Stock:</h4>
            <span>{this.state.arrayProductos2[this.state.arrayProductos-1].quantity}</span>
        </div>
    );
}
}

export default Product;



