import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import  logo from "../../Img/lolo.png"
export default function Navbar() {
  return <>
    <nav className={`${style.na} navbar navbar-expand-lg navbar-dark bg-dark fixed-top text-light`}>

    <div className="container-fluid  border-bottom rounded">
        <div className='me-auto ms-3'>
            <img src={logo} className={style.logo} alt="" />
            <a className="navbar-brand">MM Cinema</a>
        </div> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 text-center ms-auto me-3">
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="">Movies</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="action">Action</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="comedy">Comedy</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="horror">Horror</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="order">Order</Link>
            </li>
        </ul>
        
        </div>
    </div>
    </nav>

    </>
  
}
