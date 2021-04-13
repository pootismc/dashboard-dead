import React, {Component} from 'react'
import "../assets/css/simplePanels.css"


class Simple extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            arrayUsuarios: []
        }
    }
    apiCall(url, c) {
        console.log("1")
        fetch(url)
            .then(response => response.json())
            .then(data => c(data))
            .catch(e => console.log(e))
    }

    totalUsuarios = (data) => {
        console.log("2", data)
        this.setState({
           arrayUsuarios: data.data,  
       })
       console.log()
   }
   
    componentDidMount() {
        console.log( "3")
        this.apiCall("https://dead-fellas.herokuapp.com/api/user", this.totalUsuarios);
    }

    render() {
    return (
    <div className="categorias">
        <div className = "divSimple">
            <h2 className = "miniDiv">Total de usuarios</h2>
            {this.state && this.state.arrayUsuarios.map(function(e, i){
            return <li key={i}>{i}</li>})}
        </div>
        <div className = "divSimple">
            <h2 className = "miniDiv">Hola</h2>
            <span></span>
        </div>
        <div className = "divSimple">
            <h2 className = "miniDiv">Hola</h2>
            <span></span>
        </div>
    </div>

    );
}
}

export default Simple;





