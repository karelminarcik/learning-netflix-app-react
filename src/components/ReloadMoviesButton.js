import "./ReloadMoviesButton.css"

const ReloadMoviesButton = (props) => {
    return(
        <button className="reload-button" onClick={props.reloadAll}>
            Obnovit filmy
        </button>
    )
}

export default ReloadMoviesButton