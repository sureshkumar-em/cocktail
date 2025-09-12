import React from "react";
import "./CtHeader.css";
import { useNavigate } from "react-router-dom";

function CtHeader() {
  const navigate = useNavigate(); // lowercase variable name (convention)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MENU
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => navigate("/Margarita")}
                  >
                    MARGARITA
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => navigate("/Martini")}
                  >
                    MARTINI
                  </button>
                </li>
              </ul>
            </li>

            {/* Home */}
            <li className="nav-item">
              <button
                className="nav-link active btn btn-link"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>

            {/* Example Link */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => navigate("/link")}
              >
                Link
              </button>
            </li>
          </ul>
        </div>

        {/* Dots */}
        <div className="dots">
          <div className="bg-grey"></div>
          <div className="bg-yellow"></div>
          <div className="bg-red"></div>
        </div>
      </div>
    </nav>
  );
}

export default CtHeader;
