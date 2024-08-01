import { UUID } from "../../_Shared/value-object/uuid";
import { Serie } from "./Serie";

export interface SerieRepository{
    create({serie}:{serie:Serie});

    read({id}:{id:UUID});

    update({serie,id}:{serie:Serie,id:UUID});

    delete({id}:{id:UUID});
}