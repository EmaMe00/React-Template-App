import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
import FirstPage from "./pages/page1/firstPage";
import Navbar from "./components/navbar/navbar";
import {MainContext} from "./context/context";

/*
* Utilizziamo l'AppRoot per creare la differenziazione tra le pagine attraverso gli URL
* */
const AppRoot = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/page" element={<FirstPage/>} />
        </Routes>
    )
}


function App() {

    //Creo un contatore che condividerò attraverso un contesto
    const [counter,setCounter] = useState(0)

  return (
      /* Inserisco il contesto come wrapper di altri elementi,
      * così facendo tutti gli elementi sottostanti a questo contesto sono
      * in grado di usufruirne. Costruisco il contesto passando come valori
      * di esso il valore del contatore e la sua funzione che ne cambia il valore */
      <MainContext.Provider value={{counter,setCounter}}>
      <BrowserRouter>
          {/* Inserisco prima la navbar poichè questa deve essere visibile in tutte le pagine */}
          <Navbar/>
          <AppRoot/>
      </BrowserRouter>
      </MainContext.Provider>
  );
}

export default App;
