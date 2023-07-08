import {Link} from 'react-router-dom'
export const Navbar = () =>{
    return(
        <nav>
            <div>
                <p>LOGO</p>
                <div>
                    <Link to="/categoria/comida">Comida</Link>
                    <Link to="/categoria/muebles">Muebles</Link>
                </div>
            </div>
        </nav>
    )
}