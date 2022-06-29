function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-dark py-3">
            <div className="container">
              <a className="navbar-brand text-bold px-5" href="#">News</a>
              <div>
                <ul className="text-light d-flex align-items-center">
                    <li className="list-group-item px-4">Home</li>
                    <li className="list-group-item px-4">News</li>
                    <li className="list-group-item px-4">About</li>
                    <li className="list-group-item px-4">Services</li>
                </ul>
              </div>
            </div>
        </nav>
    )
}

export default Header;