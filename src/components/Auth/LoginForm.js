import { useRef, useContext, useEffect, useState } from "react";
import NameContext from "../../store/NameCtx";
import { Redirect } from "react-router-dom";

function LoginForm() {
  const nameInputRef = useRef();
  const ctx = useContext(NameContext);
  const [userIsValid, setUserIsValid] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const pattern = new RegExp("[A-za-z]+");
    const enteredName = nameInputRef.current.value;
    const isValid = pattern.test(enteredName);
    if (isValid) {
      setUserIsValid(true);
      localStorage.setItem("name", enteredName);
      ctx.setName(enteredName);
    } else {
      setUserIsValid(false);
    }
  }

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name && name !== "") {
      ctx.setName(name);
    }
  }, [ctx.name, ctx]);

  if (ctx.name) {
    return <Redirect to="/" />;
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">What's your name?</label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
        {!userIsValid && <p>Name can only contain English letters</p>}
        <button onClick={submitHandler} type="button">
          Login 
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
