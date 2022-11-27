import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

    // const { author, quote } = data; //Da error
    const { author, quote } = !!data && data[0];  //Hacemos condicional para evitar el "null" de la 'data'
    
    console.log({data, isLoading, hasError})
    console.log(data)
    
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

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
