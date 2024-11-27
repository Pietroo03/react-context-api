import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostPage() {

    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const url = `http://127.0.0.1:3000/posts/${slug}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                const keys = Object.keys(data)
                if (keys.includes('error')) {
                    navigate('/404')
                } else {
                    setPost(data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
        [])

    return (

        <>

            {
                post ? (

                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card h-100 shadow-sm border-light">
                                        <img
                                            src={`http://127.0.0.1:3000/${post.image}`}
                                            className="card-img-top img-fluid"
                                            alt={post.title}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">
                                                {post.title}
                                            </h5>
                                            <hr />
                                            <div className="card-text">
                                                <p>
                                                    {post.content}
                                                </p>
                                            </div>
                                            <hr />
                                            <div className="p-2">
                                                <strong>Tags: </strong>
                                                {post.tags.join(', ')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center m-5">
                                <Link to={'/posts'}>
                                    <button className="btn btn-primary">Torna alle ricette</button>

                                </Link>
                            </div>
                        </div>

                    </div>

                ) : (
                    <div>Loading...</div>
                )
            }

        </>

    )

}