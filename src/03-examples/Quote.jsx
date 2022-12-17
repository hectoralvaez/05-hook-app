export const Quote = ({ author, quote }) => {
    return (
        <blockquote className="blockquote text-end">
            <p>{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    );
};