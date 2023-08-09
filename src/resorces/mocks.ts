//In questa pagina aggreghiamo i mock che vogliamo utilizzare
import {ICard} from "../components/card/card";
import {ProjectConst} from "./ProjectConst";

export const myCards: ICard[] = [
    {
        title:"Title 1",
        description: "Description 1",
        img: ProjectConst.img.frog1,
        toggleDescription: true,
        toggle: () => {}
    },
    {
        title:"Title 2",
        description: "Description 2",
        img: ProjectConst.img.frog2,
        toggleDescription: true,
        toggle: () => {}
    },
]