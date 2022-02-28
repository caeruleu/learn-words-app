import React, { useState, useEffect } from "react";
const context = React.createContext();

function ContextProvider(props) {
    const [wordsArr, setWordsArr] = useState([]);

    let getWordsArr = () => {
        fetch('/api/words')
            .then(response => response.json())
            .then(data => {
                setWordsArr(data);
                return data;
            })
    }

    useEffect(() => {
        getWordsArr();
    }, [])
    
    return(
        <context.Provider value={{wordsArr, getWordsArr}}>
            {props.children}
        </context.Provider>
    );
}

export {ContextProvider, context};
