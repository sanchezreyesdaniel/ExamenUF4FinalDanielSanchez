import { Card } from "../componentes/Card";
import Cards from "../componentes/Cards";
import { ModalForm } from "../componentes/Modal";

export function Home(){
    return(
        <div>
            <div>Hola desde Home</div>
            {/* <Card></Card> */}
            <Cards></Cards>
            <dir>
                <ModalForm></ModalForm>
            </dir>
        </div>
        
        
    )
}