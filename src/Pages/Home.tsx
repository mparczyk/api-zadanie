import './Home.css'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="wrapper">
        <header className="header">Super Article Page</header>
        <main className="main">
          <Outlet />
        </main>
        <nav className="aside aside-1">
            <p>Navigation</p>
            <ul className="list">
            <li>
              <Link className="link" to={`/`}>Start</Link>
            </li>
            <li>
              <Link className="link" to={`/articles`}>Arcitles</Link>
            </li>
            <li>
              <Link className="link" to={`/newarticle`}>New Article</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  