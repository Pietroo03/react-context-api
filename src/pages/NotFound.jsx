import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <main className="text-center pt-4 vh-100">
            <h2 className=" mt-4 text-primary">Nessun Post Trovato</h2>
            <div className="fs-5 mt-4"><strong>Il nostro Web Developer Miguel potrebbe non aver ancora aggiunto questa ricetta</strong></div>
            <Link to={'/posts'} className="btn btn-primary mt-4">Torna alla lista dei Posts</Link>
        </main>
    )
}