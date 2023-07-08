import {Link} from 'react-router-dom'
export const Navbar = () =>{
    return(
        <nav>
            <div>
                <p>LOGO</p>
                <div style={{display: "flex", gap: "25px", justifyContent: "center"}}>
                    <Link to="/categoria/comida">Comida</Link>
                    <Link to="/categoria/muebles">Muebles</Link>
                    <Link to="tiendita/login">Ir al Login</Link>
                </div>
            </div>
        </nav>
    )
}