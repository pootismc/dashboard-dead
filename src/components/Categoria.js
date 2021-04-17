import React, {Component} from 'react'
import "../assets/css/simplePanels.css"

class Category extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            colecciones: 0,
            colecciones1: 0,
        }
    }
    apiCall(url, c) {
        fetch(url)
            .then(response => response.json())
            .then(data => c(data))
            .catch(e => console.log(e))
    }
    
    componentDidMount() {
            this.apiCall("https://dead-fellas.herokuapp.com/api/product/categorias", this.totalColecciones)
        }
    
        totalColecciones = (data) => {
        this.setState({
            colecciones: data.data[0].products.length,
            colecciones1: data.data[1].products.length,
        })
        }
   

    render() {
    return (
        <div  className = "divSimple">
            <h2 className = "miniDiv">Cantidad de productos relacionados a una categoria</h2>
            <br></br>
            <h2>Temporada 2020:   {this.state.colecciones1}</h2>
            <br></br>
            <h2>Temporada 2021:{this.state.colecciones}</h2>
        </div>
    );
}
}

export default Category; 