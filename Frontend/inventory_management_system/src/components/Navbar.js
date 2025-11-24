import React, { useState } from 'react';

export default function Navbar({ title, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query); // send query to parent
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6c63ff" }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/">{title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-4" href="/about">About</a>
              </li>
            </ul>

            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-light fs-5" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
