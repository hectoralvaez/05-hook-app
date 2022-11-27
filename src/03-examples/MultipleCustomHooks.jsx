import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    
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
                            <p>{ data[0].quote }</p>
                            <footer className="blockquote-footer">{ data[0].author }</footer>
                        </blockquote>
                    )

            }
        </>
    );

};
