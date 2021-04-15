import React, {Component} from 'react'
import "../assets/css/dataPanels.css"

class Data extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            arrayUsuarios: 0,
            arrayUsuarios2: [],
            loading: true,
            total: 0,
            arrayProductos: [],
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
        this.apiCall("https://dead-fellas.herokuapp.com/api/product", this.totalProductos);
        this.apiCall("https://dead-fellas.herokuapp.com/api/collections", this.totalColecciones);
        }
        

        totalProductos = (data) => {
            this.setState({
                arrayProductos: data.data,
                 
            })}

        totalUsuarios = (data) => {
            this.setState({
                arrayUsuarios: data.data.length,
                arrayUsuarios2: data.data
            }) 
        console.log(data.data)
        console.log(data.data.length)}

    render() {
        console.log('hola', this.state.arrayUsuarios2[1])
     if (this.state.loading) {
         return "loading"
     }
    return (
    <div className="categorias">
        <div className = "divSimple">
            <h2 className = "miniDiv">Ultimo usuario creado</h2>
            <p>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].name}</p>
            <p>{this.state.arrayUsuarios2[this.state.arrayUsuarios-1].email}</p>
        </div>
        <div className = "divSimple">
            <h2 className = "miniDiv">Ultimo producto creado</h2>
        </div>
        <div className = "divSimple">
            <h2 className = "miniDiv">Categorias</h2>
        </div>
        <div className = "divSimple">
            <h2 className = "miniDiv">Listado de productos</h2>
        </div>
    </div>

    );
}
}

export default Data;



