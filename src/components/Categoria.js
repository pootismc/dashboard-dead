import React, {Component} from 'react'
import "../assets/css/simplePanels.css"

class Category extends Component {
    constructor(props) {
        super(props);   
        this.state = {
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
            this.apiCall("https://dead-fellas.herokuapp.com/api/product/categorias", this.totalColecciones)
        }
    
        totalColecciones = (data) => {
        this.setState({
            colecciones: data.data[0].products.length,
        })
        }
   

    render() {
    return (
        <div  className = "divSimple">
            <h2 className = "miniDiv">Categorias productos</h2>
            <span>{this.state.colecciones}</span>
        </div>
    );
}
}

export default Category; 