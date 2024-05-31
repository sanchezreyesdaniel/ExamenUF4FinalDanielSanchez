import { useState, useContext, useEffect, createContext } from "react";

export const ContextoGlobal = createContext();
import  dadesJSON  from "../bd.json";

export const ContextoProvider = ({ children }) => {
     const [dades, setDades] = useState([]);
     const [dades2, setDades2] = useState([]);
//     const [dataHistoria, setDataHistoria] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);

//     const onOpen = () => setIsOpen(true);
//     const onClose = () => setIsOpen(false);
// //para mostra
// //esto ibaaa
//     const [cartas, setCartas] = useState([])
//     const [dataCarta, setDataCarta] = useState(null);
//     const fetchHistorias = async () => {
//             try {
//                 const response = await fetch('https://servidor-json-prueba.vercel.app/cervezas');
//                 const data = await response.json();
//                 setCartas(data);
//             } catch (error) {
//                 console.error("Error fetching historias:", error);
//             }
//         };
//         useEffect(() => {
//         fetchHistorias();
//     }, []);
// hasta aqui
const fetchTicketsPendientes = async () => {
    try {
        const response = await fetch('https://json-server-examen-nu.vercel.app/ticketsPendientes');
        const data = await response.json();
        data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
        setDades(data);
    } catch (error) {
        console.error("Error fetching historias:", error);
    }
};
useEffect(() => {
fetchTicketsPendientes();
}, []);
const fetchTicketsPendientes2 = async () => {
    try {
        const response = await fetch('https://json-server-examen-nu.vercel.app/ticketsResueltos');
        const data = await response.json();
        setDades2(data);
    } catch (error) {
        console.error("Error fetching historias:", error);
    }
};
useEffect(() => {
fetchTicketsPendientes2();
}, []);

    //const [cartas, setCartas] = useState(cartasJson.cervezas)
    //const [dataHistoria, setDataHistoria ] = useState()

    return (
        <ContextoGlobal.Provider value={{ 
            // historias, setHistorias, dataHistoria, setDataHistoria, isOpen, onOpen, onClose, fetchHistorias 
           // cartas,setCartas,fetchHistorias,dataCarta, setDataCarta
           dades, setDades, fetchTicketsPendientes,dades2, setDades2, fetchTicketsPendientes2
            }}>
            {children}
        </ContextoGlobal.Provider>
    );
}
