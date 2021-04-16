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
            <tr className = "classAll">
                <td className="AllP1"><p>{this.props.prod.name}</p></td>
                <td className="AllP1"><p>{this.props.prod.price}</p></td>
                <td className="AllP2"><p>{this.props.prod.description}</p></td>
                <td className="AllP1"><p>{this.props.prod.quantity}</p></td>
            </tr>
        );
    }
}


export default AllProduct2;