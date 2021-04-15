import React, {Component} from 'react'
import "../assets/css/simplePanels.css"

class Simple extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            total: 0,
            productos: 0,
            colecciones: 0,
        }
    }
    apiCall(url, c) {
        fetch(url)
            .then(response => response.json())
            .then(data => c(data))
            .catch(e => console.log(e))
    }
    
    componentDidMount() {
        this.apiCall("https://dead-fellas.herokuapp.com/api/user", this.totalUsuarios);
        this.apiCall("https://dead-fellas.herokuapp.com/api/product", this.totalProductos);
       this.apiCall("https://dead-fellas.herokuapp.com/api/collections", this.totalColecciones)
        }
    
        totalUsuarios = (data) => {
        this.setState({
            total: data.meta.total,
        })
    }
        totalProductos = (data) => {
        this.setState({
            productos: data.meta.total,
        })
    }
    
        totalColecciones = (data) => {
        this.setState({
            colecciones: data.meta.total,
        })
    }
   

    render() {
    return (
    <div className="categorias">
        <div className = "divSimple">
            <h2 className = "miniDiv">Total de usuarios</h2>
            <span>{this.state.total}</span>
        </div>
        <div className = "divSimple">
            <h2 className = "miniDiv">Total de productos</h2>
            <span>{this.state.productos}</span>
        </div>
        <div className = "divSimple">
            <h2 className = "miniDiv">Total de colecciones</h2>
            <span>{this.state.colecciones}</span>
        </div>
    </div>
    );
}
}

export default Simple; 








