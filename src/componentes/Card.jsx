export function Card({id,titulo,texto,imagen}){
    return(
        <div>
            <div id={id} className="card" style={{ width: '18rem' }}>
                <img  src={imagen} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card {titulo}</h5>
                <p className="card-text">{texto}</p>
                <a href="#" className="btn btn-primary">Editar</a>
                <a href="#" className="btn btn-danger ml-2">Eliminar</a>
            </div>
            </div>

        </div>
    )
}