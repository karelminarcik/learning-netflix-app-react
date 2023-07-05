import "./AllDeleteMovie.css"

const AllDeleteMovie = (props) => {
    return (
        <button className="main-delete-button" onClick={props.deleteAll}>
            Vymazat vsechny filmy
        </button>
    )
}

export default AllDeleteMovie