

export const NavBar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                Javier Angosto
            </span>

            <button className="btn btn-outline-danger">
                <span>
                    <i className="fas fa-sign-out-alt"></i>
                    &nbsp;
                    Sign out
                </span>
            </button>
            
        </div>
    )
}
