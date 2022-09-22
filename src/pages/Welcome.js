import { Fragment, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NameContext from "../store/NameCtx";
import classes from './Welcome.module.css';


const Welcome = () => {
  const ctx = useContext(NameContext);

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name && name !== "") {
      ctx.setName(name);
      console.log(ctx.name);
    }
  }, [ctx.name, ctx]);

  return (
    <Fragment>
      <div className={classes.background}>
      <div className={classes.wrapper}>
      <h1 className={classes.heading}>Welcome to the Rick and Morty DB</h1>
      {!ctx.name && <NavLink className={classes.btn} to="/login">Login</NavLink>}
      {ctx.name && <NavLink className={classes.btn} to="/episodes">AllEpisodes</NavLink>}
      {ctx.name && <NavLink className={classes.btn} to="/search">Search</NavLink>}
      </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
