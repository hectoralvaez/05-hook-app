import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    
    console.log({data, isLoading, hasError})
    
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            
            <div className="alert alert-info text-center">
                Loading...
            </div>
            <blockquote className="blockquote text-end">
                <p className="mb-2">Hola mundo</p>
                <footer className="blockquote-footer">Fernando Herrera</footer>
            </blockquote>
        </>
    );
    
};
