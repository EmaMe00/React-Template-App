/* Imposto due funzioni generiche che effettuano GET e POST*/

//La GET, in questo caso, necessita di un URL e di un token se disponibile
//il <T> indica un tipo generico, async<T> indica che si aspetta da noi dei dati generici se ce ne sono
//invece Promise <T> indica che i dati che riceviamo sono generici, quindi prende qualsiasi cosa
export const get = async <T>(url: string, token: string): Promise<T> => {
    try {
        const response = await fetch(url,{
                // Creiamo il tipo di richiesta
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                     Authorization: `Bearer ${token}`,
                },
            });
        //Se qualcosa è andato storto allora ci avvisa
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //Altrimenti ci ritorna i dati che ci ha fornito il json (T indica che sta lavorando con un tipo generico)
        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Funzione per effettuare una chiamata POST
export const post = async <T>(url: string, data: any, token: string): Promise<T> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`
            },
            //In questo caso abbiamo un body dove passiamo i dati come json
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData: T = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
