import { Fragment, useEffect, useContext } from 'react';
import Navigation from './Navigation';
import classes from './Layout.module.css';
import NameContext from '../store/NameCtx';

function Layout(props){
    const ctx = useContext(NameContext);

    useEffect(() => {
        const name = localStorage.getItem("name");
        if (name && name !== "") {
          ctx.setName(name);
        }
      }, [ctx.name, ctx]);

    return <Fragment>
        <Navigation />
        <main className={classes.main}>{props.children}</main>
    </Fragment>
}

export default Layout;