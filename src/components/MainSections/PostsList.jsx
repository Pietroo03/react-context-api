import { Link } from "react-router-dom"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"

export default function PostsList({ postsData, handleRemove }) {

    const { api } = useContext(GlobalContext)

    return (
        <section className="posts py-5 bg-light">
            <div className="container bg-white p-5 shadow rounded">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {postsData.data ?
                        postsData.data.map((post, index) => (
                            <div className="col" key={index}>

                                <div className="card h-100 shadow-sm border-light">
                                    <Link to={`/posts/${post.slug}`}>
                                        <img
                                            src={api + post.image}
                                            className="card-img-top img-fluid"
                                            alt={post.title}
                                            style={{ objectFit: 'cover', height: '200px' }}
                                        />

                                    </Link>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-truncate">
                                            {post.title}
                                        </h5>
                                        <hr />
                                        <div className="card-text">
                                            <p
                                                style={{ maxHeight: '120px', overflowX: 'hidden' }}>
                                                {post.content}
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="p-2">
                                            <strong>Tags: </strong>
                                            {post.tags.join(', ')}
                                        </div>
                                        <hr />
                                        <div className="text-center mt-auto">
                                            <button
                                                onClick={handleRemove}
                                                data-slug={post.slug}
                                                className="btn btn-danger btn-sm">
                                                Rimuovi
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )) :
                        <p className="text-center text-muted">Premi il pulsante per visualizzare i posts</p>
                    }
                </div>
            </div>
        </section>
    )

}