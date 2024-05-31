import React, { useState } from 'react';
import { TablaPendientes } from "../componentes/TablaPendientes";
import { TablaResueltos } from "../componentes/TablaResueltos";
import { NouTicket } from "./NouTicket";

export function Panel() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <>
      <TablaPendientes />
      <TablaResueltos />
      <button onClick={toggleFormulario}>Crear</button>
      {mostrarFormulario && <NouTicket />}
    </>
  );
}
