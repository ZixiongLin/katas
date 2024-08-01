import { describe, expect, it } from 'vitest'

import { VideoRepositoryMock } from '../src/Video/Infraestructure/VideoRepositoryMock'
import { Video } from '../src/Video/Domain/Video';
import { UUID } from '../src/_Shared/value-object/uuid';


describe("Video Repository Mock", ()=> {

    const mock = new VideoRepositoryMock();
    const createdVideo:Video ={
        name: "test-1",
        uuid: UUID.createUUID()
    }

    
    it("mock should has a array void", () => {
        expect(mock.videos.length).toEqual(0)
    })
    it("append one video", () => {
        const videos = mock.create({video:createdVideo});
        expect(videos.length).toEqual(mock.videos.length)
        expect(mock.videos.length).toEqual(1)
    })
    describe("Read Video", () => {
        it("can get one by uuid", () => {
            const videoReaded = mock.read({uuid:createdVideo.uuid});
            expect(videoReaded).toEqual(createdVideo);
        })
    
        it("video no exists", () => {
            const videoReaded = mock.read({uuid:"1"});
            expect(videoReaded).toEqual(undefined);
        })
    })
    describe("delete video", () => {
        it("can get one by uuid", () => {
            const videoReaded = mock.delete({uuid:createdVideo.uuid});
            expect(videoReaded).toEqual([]);
            expect(mock.videos.length).toBe(0)
        })
    
        it("video no exists", () => {
            const videoReaded = mock.delete({uuid:createdVideo.uuid});
            expect(videoReaded).toEqual([]);
            expect(mock.videos.length).toBe(0)
        })
    })
    it("update video", () => {
        const updatedVideo:Video = {
            ...createdVideo,
            name:"test-2"
        }
        mock.create({video:createdVideo});
        mock.update({video:updatedVideo, uuid:createdVideo.uuid});
        expect(mock.videos[0]).toEqual(updatedVideo);
        expect(mock.videos.length).toEqual(1);
    })
})