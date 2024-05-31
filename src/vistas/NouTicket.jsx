import React, { useState, useContext } from 'react';
import { ContextoGlobal } from '../context/GlobalContext';
//Historia5
export function NouTicket() {
    const { fetchTicketsPendientes } = useContext(ContextoGlobal);
    const [codigo, setCodigo] = useState('');
    const [fecha, setFecha] = useState('');
    const [aula, setAula] = useState('');
    const [grupo, setGrupo] = useState('');
    const [ordenador, setOrdenador] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [alumno, setAlumno] = useState('');

    async function controladorNuevaHistoria(event) {
        event.preventDefault();

        const dataCarta = {
            codigo: codigo,
            fecha: fecha,
            aula: aula,
            grupo: grupo,
            ordenador: ordenador,
            descripcion: descripcion,
            alumno: alumno
        };

        console.log('Creando nueva historia:', dataCarta);

        try {
            const response = await fetch('https://json-server-examen-nu.vercel.app/ticketsPendientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataCarta),
            });
            if (response.ok) {
                await fetchTicketsPendientes();
                setCodigo('');
                setFecha('');
                setAula('');
                setGrupo('');
                setOrdenador('');
                setDescripcion('');
                setAlumno('');
            }
        } catch (error) {
            console.error('Error al crear la historia:', error);
        }
    }


    
    return (
        <div>
            <h1>Nuevo Ticket</h1>
            <form onSubmit={controladorNuevaHistoria} method="POST">
                <label htmlFor="codigo">Código:</label>
                <input type="text" id="codigo" name="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} required /><br /><br />

                <label htmlFor="fecha">Fecha:</label>
                <input type="text" id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required /><br /><br />

                <label htmlFor="aula">Aula:</label>
                <input type="text" id="aula" name="aula" value={aula} onChange={(e) => setAula(e.target.value)} required /><br /><br />

                <label htmlFor="grupo">Grupo:</label>
                <input type="text" id="grupo" name="grupo" value={grupo} onChange={(e) => setGrupo(e.target.value)} required /><br /><br />

                <label htmlFor="ordenador">Ordenador:</label>
                <input type="text" id="ordenador" name="ordenador" value={ordenador} onChange={(e) => setOrdenador(e.target.value)} required /><br /><br />

                <label htmlFor="descripcion">Descripción del problema:</label><br />
                <textarea id="descripcion" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="4" cols="50" required></textarea><br /><br />

                <label htmlFor="alumno">Alumno:</label>
                <input type="text" id="alumno" name="alumno" value={alumno} onChange={(e) => setAlumno(e.target.value)} required /><br /><br />

                <input  type="submit" value="Enviar" />
            </form>
        </div>
    );
}
