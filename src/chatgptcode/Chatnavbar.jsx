

const Chatnavbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <span className="company-name">CompanyName</span>
          </div>
          <div className="navbar-middle">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#text" className="nav-link">Text</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="navbar-right">
            <img src="/path-to-logo.png" alt="Company Logo" className="company-logo" />
          </div>
        </div>
      </nav>

    );
};

export default Chatnavbar;