export function Registro() {
    return (
        <div>
            <div className="pt-5">
                <h1 className="w-100 text-center">Login</h1>
                <form action="" className="form p-4 border shadow bordered mt-5 mx-auto" style={{ width: '400px' }}>
                    <label htmlFor="nombre" className="mt-2 form-label">Nombre: </label>
                    <input type="text" id="nombre" name="nombre" className="form-control" placeholder="nombre" />

                    <label htmlFor="Apellidos" className="mt-2 form-label">Apellidos: </label>
                    <input type="text" id="Apellidos" name="Apellidos" className="form-control" placeholder="apellidos" />

                    <label htmlFor="Email" className="mt-2 form-label">Email: </label>
                    <input type="text" id="Email" name="Email" className="form-control" placeholder="usuario@mail.com" />
                   
                    <label htmlFor="pass" className="mt-2 form-label">Contraseña: </label>
                    <input type="password" id="pass" name="password" className="form-control" />
                    
                    <input type="submit" className="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar" />
                </form>
            </div>
        </div>
    );
}
