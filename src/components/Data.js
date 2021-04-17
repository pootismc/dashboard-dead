import React, {Component} from 'react'
import "../assets/css/dataPanels.css"

class Data extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            arrayUsuarios: 0,
            arrayUsuarios2: [],
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
        this.apiCall("https://dead-fellas.herokuapp.com/api/user", this.totalUsuarios);
    }
        

        totalUsuarios = (data) => {
            this.setState({
                arrayUsuarios: data.data.length,
                arrayUsuarios2: data.data
            })}

    render() {
     if (this.state.loading) {
         return "loading"
     }
    return (
        <div className = "divSimple">
            <h2 className = "miniDiv">Ultimo usuario creado</h2>
            <br></br>
            <h4>Nombre:</h4>
            <span>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].name}</span>
            <br></br>
            <h4>Apellido:</h4>
            <span>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].surname}</span>
            <br></br>
            <h4>Email:</h4>
            <span>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].email}</span>
        </div>

    );
}
}

export default Data;



