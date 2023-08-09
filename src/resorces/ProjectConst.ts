//La root parla dalla cartella public (poichè è quella che viene renderizzata)
const root = './img'

//Utilizziamo questa variabile globale per comunicare dei dati costanti utili a tutto il progetto
export const ProjectConst = {
    img: {
        frog1: `${root}/frog1.jpg`,
        frog2: `${root}/frog2.jpg`
    },
    constant: {
        pi: 3.14
    }
}