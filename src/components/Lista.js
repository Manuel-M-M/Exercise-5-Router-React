
function Lista(props){
    return (
        <>
            <div className="container mt-4 ml-4">
                <h2>{props.categoria}</h2>
                {
                    props.productos.map(({id, marca, modelo, precio, producto})=>{
                        return <p key={id}>{producto} {marca} {modelo} - Precio: {precio} €</p>
                    })
                }
            </div>
        </>
        );
}

export default Lista;