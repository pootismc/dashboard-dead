import React, { Component } from 'react';
import AllProduct2 from "../components/AllProduct2"


class AllProduct extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            arrayProductos: []
        }
    }



    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("https://dead-fellas.herokuapp.com/api/product", this.totalProductos);
       

        
    }

    totalProductos = (data) => {
        this.setState({
            arrayProductos: data.data,  
        })
    }

  


    render() {
        return (
            <div>   
                {this.state.arrayProductos.map((producto)=> { return <AllProduct2 prod={producto} />})}
            </div>

        );
    }
}

export default AllProduct;