import team from "../data/team"
export default function About() {
    return (

        <>

            <main className="vh-100">
                <div className="text-center pt-3 ">
                    <h2 className="mt-4 text-primary">Questo è il nostro Team</h2>
                </div>

                <section className="posts py-5 bg-light">
                    <div className="container bg-white p-5 shadow rounded">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">

                            {team.map((member, index) => (
                                <div className="col" key={index}>

                                    <div className="card h-100 shadow-sm border-light">
                                        <img
                                            src={member.image}
                                            className="card-img-top img-fluid"
                                            alt={member.name}
                                            style={{ objectFit: 'cover', height: '500px' }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-truncate">
                                                {member.name}
                                            </h5>
                                            <hr />
                                            <div className="p-2">
                                                <strong>Ruolo: </strong>
                                                {member.role}
                                            </div>
                                            <hr />
                                            <div className="card-text">
                                                <p
                                                    style={{ maxHeight: '120px', overflowX: 'hidden' }}>
                                                    {member.talent}
                                                </p>
                                            </div>
                                            <hr />


                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </section>
            </main>

        </>
    )
}