import 'react';
import { Link } from "react-router-dom";
function NotFound() {
    return (
        
        <div className="mt-5 text-center">
            <h1>ERREUR 404</h1>
            <h2>PAGE INTROUVABLE</h2>
            <Link to="/">
                Back Home
            </Link>
        </div>
    );
}

export default NotFound;