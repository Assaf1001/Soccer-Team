import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <section className="page">
    <h2 className="not-found-title">404 PAGE NOT FOUND</h2>
    <h3>
      Go to <Link to="/">Teams page </Link>
    </h3>
  </section>
);

export default NotFoundPage;
