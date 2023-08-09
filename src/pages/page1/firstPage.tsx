import style from "./firstPage.module.css"
import Card, {ICard} from "../../components/card/card";
import React, {useContext, useEffect, useState} from "react";
import {myCards} from "../../resorces/mocks";
import {MainContext} from "../../context/context";

const FirstPage = () => {

    /* Acquisisco il contesto e lo utilizzo in questa funzione */
    const context:any = useContext(MainContext)
    const changeCounter = () => {
        context.setCounter(context.counter + 1)
    }

    //Variabile che contiene e gestisce le card
    const [cards, setCards] = useState<ICard[]>([]);

    /*
    Quando viene caricata la pagina vengono caricati i mock,
    viene impostata la funzione di callback
    e viene tutto salvato
     */
    useEffect(
        () => {
            //Carico i mock
            const allCards = myCards

            //Setto la funzione di callback
            const updatesCard = allCards.map((card) => {
                card.toggle = setToggleDescription
                return card
            })
            //Setto i dati nella useState
            setCards(updatesCard)

        },[]
    )



    //Questa funzione è quella che andremo ad assegnare come funzione di callback
    const setToggleDescription = (myTitle: string) => {
        /* Quando questa funzione viene creata le useEffect non è ancora stata eseguita
        * quindi dobbiamo utilizzare un arrow function all'interno della setCards
        * per utilizzare l'ultimo stato delle card
        * */
        setCards((cards) => {
            /*Il metodo map() è una funzione degli array in JavaScript che viene
            utilizzata per trasformare ogni elemento di un array creando un
            nuovo array con i risultati della trasformazione. Non modifica
            l'array originale ma restituisce un nuovo array con gli elementi trasformati.
            * */
            const updatedCards = cards.map((card) => {
                //Cambio la bisibilità alla descrizione della card
                if (card.title === myTitle) {
                    card.toggleDescription = !card.toggleDescription;
                }
                return card;
            });
            return updatedCards;
        });
    };

    /* Setto le card filtrate per titolo */
    const onFilter = () => {
        setCards( (cards) => {
            const updatedCards = cards.filter(card => card.title == "Title 1")
            return updatedCards
        })
    }

    //Definisco l'elemento html card (passando come parametro una card)
    const card = (card:ICard) => (
        <div className="col">
        <Card title={card.title} img={card.img} description={card.description} toggleDescription={card.toggleDescription} toggle={card.toggle}/>
        </div>
            )
    // Ottengo l'array di card
    const renderCard = cards.map(card);

    return (
        <div className={style.mainMargin}>
            <div className="container text-center">
                <div className="row align-items-start">
                    {renderCard}
                </div>
                <br/>
                <div className="row align-items-start">
                <button type="button" className="btn btn-primary"  onClick={onFilter}>Filter</button>
                </div>
            </div>
            <br/><br/>
            <h5> Context </h5>
            <p>{context.counter}</p>
            <button type="button" className="btn btn-primary"  onClick={changeCounter}>Click Me!</button>
        </div>
    )

}

export default FirstPage;