import React, { Component } from 'react';
import "../assets/css/dataPanels.css"


class AllProduct2 extends Component{
    constructor(props) {
        super(props);  
        this.state = {

        }
    }

    render() {
        return (
        <div className = "classAll">
            <p>{this.props.prod.name}</p>
            <p>{this.props.prod.price}</p>
            <p className="AllP">{this.props.prod.description}</p>
            <p>{this.props.prod.quantity}</p>
        </div>
        );
    }
}


export default AllProduct2;