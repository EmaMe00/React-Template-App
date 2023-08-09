import {get,post} from "../api.request";

//Questa pagina utilizza le api specifiche, quindi qui utilizziamo i metodi get e post
//creati precedentemente per effettuare delle chiamate su degli url specifici e con dei dati specifici

//URL che vogliamo contattare
const url = "https://httpbin.org/"

//Chiamata get dove passiamo un token di autenticazione, se non ne abbiamo allora passiamo ""
export const testGet = (token:string) => {
    // Esempio di chiamata GET, passiamo url e token
    get<any>(url + "/anything",token)
        .then((data) => {
            console.log('GET response:', data);
        })
        .catch((error) => {
            console.error('Error in GET request:', error);
        });
}

export const testPost = (token:string, postData:any) => {
    //Paassiamo url, token e dati che vogliamo inviare
    post<any>(url + "/anything", postData, token)
        .then((responseData) => {
            console.log('POST response:', responseData);
        })
        .catch((error) => {
            console.error('Error in POST request:', error);
        });
}


