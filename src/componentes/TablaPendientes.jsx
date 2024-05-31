import { useContext } from "react";
import { ContextoGlobal } from "../context/GlobalContext";
import "bootstrap-icons/font/bootstrap-icons.css";

export function TablaPendientes() {
    const { dades, fetchTicketsPendientes} = useContext(ContextoGlobal);
    // function controladorBorrarHistoria(){
    //     console.log('Eliminar historia con id:');
    // }
    async function controladorBorrarTicket(ticketId) {
        

        try {
            const response = await fetch(`https://json-server-examen-nu.vercel.app/ticketsPendientes/${ticketId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.ok){
                await fetchTicketsPendientes();
            }
                
        } catch (error) {
            console.error('Error al eliminar la historia:', error);
        }
    }

    function controladorActualizar(){
        console.log('Hola')
    }

    return (
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
                    {dades.map(ticket => (
                        <tr id={ticket.id} key={ticket.id}>
                            <td>{ticket.codigo}</td>
                            <td>{ticket.fecha}</td>
                            <td>{ticket.aula}</td>
                            <td>{ticket.grupo}</td>
                            <td>{ticket.ordenador}</td>
                            <td>{ticket.descripcion}</td>
                            <td>{ticket.alumno}</td>
                            <td><button onClick={() => controladorActualizar(ticket.id)} className="btn btn-success" title="Resolver ticket">Resolver</button></td>
                            <td><button className="btn btn-warning" title="Añadir comentario"><i className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
                            <td><button  className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i></button></td>
                            <td><button onClick={() => controladorBorrarTicket(ticket.id)} className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
