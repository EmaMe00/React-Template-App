import React, {useContext, useEffect, useRef, useState} from 'react';
import Navbar from "../../components/navbar/navbar";
import style from "./mainPage.module.css"
import {MainContext} from "../../context/context";
import {testGet, testPost} from "../../request/testRequest/api.testRequest";
const MainPage = () => {

    /* Scrivo un log appena si carica la pagina*/
    useEffect(() => {
       console.log("Pagina caricata correttamente !")
    },[])

    /* Variabile che contiene e gestisce il contenuto della prima text box */
    const [text1,setText1] = useState("Default text 1");

    /* Variabile che fa riferimento alla seconda textbox */
    const inputRef = useRef<HTMLInputElement>(null);
    /* Variabile che contiene e gestisce il contenuto della seconda text box */
    const [text2,setText2] = useState("Default text 2");

    /* Acquisisco il contesto e lo utilizzo in questa funzione */
    const context:any = useContext(MainContext)
    const changeCounter = () => {
        context.setCounter(context.counter + 1)
    }

    /* Funzione per gestire la prima textbox */
    const onChangeText = (event:any) => {
        setText1(event.target.value)
    }

    /* Funzione per gestire la seconda textbox */
    const onClickText = () => {
        if (inputRef.current) {
            setText2(inputRef.current.value);
        }
    }

    /* Monitoro lo stato delle variabili associate ai campi di testo, quando queste
    * variano, stampo a schermo un messaggio */
    useEffect(
        () => {
            console.log("La pagina è cambiata")
        },[text1,text2]
    )

    /* Variabile e funzione per gestire la checkbox */
    const [isChecked, setIsChecked] = useState(false);
    const onCheckbox = () => {
        setIsChecked(!isChecked);
        console.log(isChecked)
    };

    /* Faccio due chiamate API */
    const apiCall = () => {
        //Faccio una get senza passare il token
        testGet("")
        //Faccio una post dove non invio ne token ne dati
        testPost("",null)
    }

    return (
        <div className={style.mainMargin}>
            <h1>React Hooks</h1>
            <br/><br/>
            <h5> OnChange input </h5>
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(event) => {onChangeText(event)}}/>
            </div>
            <h5> OnChange output </h5>
            <p>{text1}</p>

            <br/><br/>
            <h5> OnClick input </h5>
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" ref={inputRef}/>
                <button type="button" className="btn btn-primary"  onClick={onClickText}>Click Me!</button>
            </div>
            <h5> OnClick output </h5>
            <p>{text2}</p>

            <br/><br/>
            <h5> CheckBox input </h5>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={onCheckbox} checked={isChecked}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Checkbox
                </label>
            </div>

            <br/><br/>
            <h5> Context </h5>
            <p>{context.counter}</p>
            <button type="button" className="btn btn-primary"  onClick={changeCounter}>Click Me!</button>

            <br/><br/>
            <h5> API CALL (see console)</h5>
            <button type="button" className="btn btn-primary"  onClick={apiCall}>Click Me!</button>
        </div>
    )
}

export default MainPage