import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    // Actualmente este dominio está dando "error 500"
    // const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // const { author, quote } = data; //Da error
    const { author, quote } = !!data && data[0];  //Hacemos condicional para evitar el "null" de la 'data'
    
    console.log({data, isLoading, hasError})
    console.log(data)
    console.log(counter);
    
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            <button disabled={isLoading} className="btn btn-primary" onClick={ () => increment() }>Next quote</button>
            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )

                    : (
                        <blockquote className="blockquote text-end">
                            <p>{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )

            }
        </>
    );

};
