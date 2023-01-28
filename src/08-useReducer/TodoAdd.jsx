
export const TodoAdd = () => {
    return (
        <>
            {/* TodoAdd onNewTodo( todo ) */}
            {/* { id: new Date()..., description: '', done; false } */}
            <form>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                />
                <button 
                    className="btn btn-outline-primary mt-1"
                    type="submit" 
                    onClick={() => {
                        onNewTodo( todo );
                    }}         
                    >
                    Agregar
                </button>
            </form>
            {/* Fin TodoAdd */}
        </>
    );
};
