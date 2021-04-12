import avatar from "../../src/assets/images/logo.jpg"
import "../assets/css/header.css"

function Header() {
    return (
        <div className="navegacion">
            <div className="logo">
                <a title="Dead Fellas" href=""><img className="avatar" width="30" src={avatar} alt="avatar"></img></a>
            </div>
            <div>
                <h2 class = "lidash">ADMINISTRADOR</h2>
            </div>
       </div>
    )
}



export default Header;