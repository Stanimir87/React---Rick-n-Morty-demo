import { useState } from "react";
import NameContext from "./NameCtx";


function NameContextProvider(props) {

 const [user, setName] = useState(null);


  const NameCtx = {
    name: user,
    setName: setName
  };

  return (
    <NameContext.Provider value={NameCtx}>
      {props.children}
    </NameContext.Provider>
  );
}

export default NameContextProvider;
