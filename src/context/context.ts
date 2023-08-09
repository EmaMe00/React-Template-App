import React from "react";

/*
* All'interno di questo file inseriremo i contesti ed eventuali variabili globali visualizzabili
* da componenti che dispongono di parentela padre figlio, e quindi componenti fratelli o senza parentela
* */

/*
In questo caso il contesto lo genero come un oggetto vuoto, che poi verrà riempito con
ciò che vogliamo far conoscere anche agli altri componenti che ne faranno uso.
Un componente "riempie" il contesto indicando cosa si vuole condividere, poi gli altri
possono acquisire questo contesto ed utilizzarlo. Vedi App.tsx.
 */
export const MainContext = React.createContext({});