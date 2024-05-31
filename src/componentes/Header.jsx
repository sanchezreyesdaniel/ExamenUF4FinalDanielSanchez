import { Link } from "react-router-dom";


export function Header() {
    return (
        // <header>
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //         <div className="container-fluid">
        //             <Link className="navbar-brand" to="/">DanielSR</Link>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        //                 <ul className="navbar-nav">
        //                     <li className="nav-item">
        //                         <Link className="nav-link nav-custom" to="/">HOME</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link nav-custom" to="/prueba1">Prueba1</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link nav-custom" to="/prueba2">Prueba2</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        //     <div className="container text-center mt-4">
        //         <h1 className="display-4">EXAMEN UF4</h1>
        //         <p className="lead">Bienvenido al examen de la unidad formativa 4</p>
        //     </div>
        // </header>
        <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Gestión de incidencias FPLLEFIA</a>
            <div>
            <Link className="btn btn-secondary ms-2" to="/panel">PANEL</Link>
              {/* <button className="btn btn-secondary ms-2">PANEL</button> */}
              <Link className="btn btn-secondary ms-2" to="/login">LOGIN</Link>
              <Link className="btn btn-secondary ms-2" to="/registro">REGISTRO</Link>
              {/* <button className="btn btn-secondary ms-2">LOGIN</button>
              <button className="btn btn-secondary ms-2">REGISTRO</button> */}
            </div>
            <div>
              <span>administrador@fpllefia.com</span>
              
            </div>
          </div>
        </nav>
      </header>
    );
}
