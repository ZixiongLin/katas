import { describe, expect, it } from "vitest";
import { SerieRepositoryMock } from "../src/Serie/Infratestructure/SerieRepositoryMock";
import { Serie } from "../src/Serie/Domain/Serie";
import { UUID } from "../src/_Shared/value-object/uuid";

describe("Serie Repository Mock", () => {
    const mock = new SerieRepositoryMock();
    const createdSerie:Serie = {
        name:"serie 1",
        uuid:UUID.createUUID(),
        chapters:[
            {
                name:"chapter 1",
                uuid:UUID.createUUID(),
            },
            {
                name:"chapter 2",
                uuid:UUID.createUUID()
            }
        ]
    }

    it("mock has not serie when it is created", () => {
        expect(mock.series.length).toBe(0)
    })
    
    it("add serie", () => {
        let series = mock.create({serie:createdSerie});
        expect(series.length).toBe(1)
    })

    it("get a serie", () => {
        let id = createdSerie.uuid;
        let serie = mock.read({id});
        expect(serie?.uuid).toBe(id);
    })

    it("delete a serie", () =>{
        let id = createdSerie.uuid;
        mock.delete({id});
        expect(mock.series.length).toBe(0)
    })

    it("update serie", () => {
        const updatedSerie = {...createdSerie, name:"update test"};
        let id = createdSerie.uuid;
        mock.create({serie:createdSerie});
        
        const series = mock.update({
            serie:updatedSerie,
            id:id
        })
        expect(series[0]).toEqual(updatedSerie)

    })
})