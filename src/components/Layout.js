import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="m-3 p-2 text-center main-heading">
          Курсы английского языка от English Witch Elena
        </h1>
        <nav className="d-flex justify-content-evenly nav mb-4 p-4">
          <div>
            <Link to="/" className="text-decoration-none fs-5 fw-bold nav-link">Home</Link>
          </div>
          <div>
            <Link to="/elementary" className="text-decoration-none fs-5 fw-bold nav-link">Elementary</Link>
          </div>
          <div>
            <Link to="/pre-intermediate" className="text-decoration-none fs-5 fw-bold nav-link">Pre-Intermediate</Link>
          </div>
        </nav>
      </div>
    <Outlet />
    </>
  )
};

export default Layout;