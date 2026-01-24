import { Link } from "react-router-dom";

const Navigation: React.FC = () => (
  <>
    <Link to="/">E-Kutubxona</Link>
    <Link to="/new-books">Yangi kitoblar</Link>
    <Link to="/best-sellers">Eng ko‘p sotilganlar</Link>
    <Link to="/sales">Sotuv</Link>
    <Link to="/certificates">Sertifikatlar</Link>
  </>
);

export default Navigation;
