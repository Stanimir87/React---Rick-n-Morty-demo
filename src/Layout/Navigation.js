import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';
import NameContext from '../store/NameCtx'
import { useContext } from "react";

function Navigation(){
    const ctx = useContext(NameContext);

    const logout = () => {
      localStorage.clear();
      ctx.setName(null);
    }

    return (
        <header className={classes.header}>
          <NavLink to="/" activeClassName={classes.logo}>Rick and Morty DB</NavLink>
          <nav className={classes.nav}>
            <ul>
              <li>
              {!ctx.name &&  <NavLink to="/login" activeClassName={classes.active}>
                  Login
                </NavLink>}
              </li>
              <li>
                {ctx.name && <NavLink to="/episodes" activeClassName={classes.active}>
                  All Episodes
                </NavLink>}
              </li>
              <li>
               { ctx.name && <NavLink to="/search" activeClassName={classes.active}>
                  Search
                </NavLink>}
              </li>
              <li>
                {ctx.name && <NavLink to="/" activeClassName={classes.active} onClick={logout}>
                  Logout
                </NavLink>}
              </li>
            </ul>
          </nav>
        </header>
      );
}

export default Navigation;