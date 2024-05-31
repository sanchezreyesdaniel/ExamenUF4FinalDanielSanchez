export function TablaPendientes(){
    return(
        <div>
            <h2 className="mt-5">Tickets pendientes</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123459</td>
            <td>18/04/2023</td>
            <td>T6</td>
            <td>DAW1</td>
            <td>PC3</td>
            <td>Error de impresora</td>
            <td>Ana Martínez</td>
            <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button className="btn btn-warning" title="Añadir comentario"><i className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
            <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i></button></td>
            <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i></button></td>
          </tr>
          
        </tbody>
      </table>
        </div>
    )
}