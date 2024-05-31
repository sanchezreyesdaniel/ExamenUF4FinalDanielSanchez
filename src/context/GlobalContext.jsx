import { useState, useContext, useEffect, createContext } from "react";

export const ContextoGlobal = createContext();
import  cartasJson  from "../bd.json";
export const ContextoProvider = ({ children }) => {
//     const [historias, setHistorias] = useState([]);
//     const [dataHistoria, setDataHistoria] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);

//     const onOpen = () => setIsOpen(true);
//     const onClose = () => setIsOpen(false);
// //para mostra

    const [cartas, setCartas] = useState([])
    const [dataCarta, setDataCarta] = useState(null);
    const fetchHistorias = async () => {
            try {
                const response = await fetch('https://servidor-json-prueba.vercel.app/cervezas');
                const data = await response.json();
                setCartas(data);
            } catch (error) {
                console.error("Error fetching historias:", error);
            }
        };
        useEffect(() => {
        fetchHistorias();
    }, []);

    //const [cartas, setCartas] = useState(cartasJson.cervezas)
    //const [dataHistoria, setDataHistoria ] = useState()

    return (
        <ContextoGlobal.Provider value={{ 
            // historias, setHistorias, dataHistoria, setDataHistoria, isOpen, onOpen, onClose, fetchHistorias 
            cartas,setCartas,fetchHistorias,dataCarta, setDataCarta
            }}>
            {children}
        </ContextoGlobal.Provider>
    );
}
