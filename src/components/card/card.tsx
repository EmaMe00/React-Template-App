
/* Descrivo la struttura dati che deve avere il componente */
export interface ICard {
    title: string,
    img:string,
    description:string,
    toggleDescription: boolean, // Indica se la descrizione e il titolo devono essere visibili o meno
    /*
    Una funzione che sarà scritta dal componente superiore e che, passato il titolo
    della carta da questo componente, prenderà la lista di carte, troverà la carta
    con il titolo fornito e successivamente modificherà la variabile toggleDescription
    */
    toggle: (myTitle: string) => void
}

/* Utilizzo i props, per farmi passare i dati dal componente superiore */
const Card = (props: ICard) => {

    /* Quando clicco il pulsante nel bottone cambio la visibilità dei dati del bottone */
    const onClickToggle = (myArg: string) => {
        props.toggle(myArg)
    }

    return (
        <div className="card" id={props.title}>
            <img src={props.img} className="card-img-top" alt="..." height="200"/>
                <div className="card-body">
                    {/* Attraverso la sintassi seguente implementiamo un if nel codice html */}
                    { props.toggleDescription == true && (
                        <div>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        </div>
                    )}
                    <a onClick={() => onClickToggle(props.title)} className="btn btn-primary">Hidden</a>
                </div>
        </div>
    )

}
export default Card