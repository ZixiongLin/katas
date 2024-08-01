import { UUID } from "../../_Shared/value-object/uuid";
import { Serie } from "../Domain/Serie";
import { SerieRepository } from "../Domain/SerieRepository";

export class SerieRepositoryMock implements SerieRepository{
    series:Serie[]
    constructor(){
        this.series = [];
    }

    create({ serie }: { serie: Serie; }) {
        this.series.push(serie);
        return this.series;
    }

    read({ id }: { id: UUID; }) {
        let serie = this.series.find(serie => serie.uuid === id);
        return serie;
    }

    delete({ id }: { id: UUID; }) {
        this.series = this.series.filter(serie => serie.uuid !== id);
        return this.series;
    }
    update({ serie, id }: { serie: Serie; id: UUID; }) {
        let index = this.series.findIndex(serie => serie.uuid === id);
        this.series[index] = serie;
        return this.series;
    }
}