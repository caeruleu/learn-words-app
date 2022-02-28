import React from "react";
const context = React.createContext();

function contextProvider(props) {
    return(
        <context.Provider>{props.children}</context.Provider>
    );
}

export {context, contextProvider}
