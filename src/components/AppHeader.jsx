import NavBar from "./Nav-bar/NavBar"

export default function AppHeader() {

    return (
        <header className="d-flex justify-content-between align-items-center p-4">
            <h1>Il Blog di Pietro</h1>
            <NavBar />
        </header>
    )

}