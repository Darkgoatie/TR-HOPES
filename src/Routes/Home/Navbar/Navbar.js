import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <div id="navbar" className="container-fluid">
        <a
          style={{
            color: "#21a0bd",
          }}
          className="navbar-brand"
          href="/#"
        >
          <img alt="icon" height="32px" src="/resources/logom.png"></img>{" "}
          TR-HOPES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <a className="underlineOnHover nav-item nav-link" href="/#">
              Ana Sayfa
            </a>
            <a className="underlineOnHover nav-item nav-link" href="/#about">
              Hakkımızda
            </a>
            <a className="underlineOnHover nav-item nav-link" href="/#vision">
              {"Vizyon & Misyon"}
            </a>
            <a className="underlineOnHover nav-item nav-link" href="/#workgroup">
               Çalışma Grubu
            </a>
            <a className="underlineOnHover nav-item nav-link" href="/#footer">
              İletişim
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
