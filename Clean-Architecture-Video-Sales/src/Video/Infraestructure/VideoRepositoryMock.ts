import { UUID } from '../../_Shared/value-object/uuid';
import { Video } from '../Domain/Video'
import { VideoRepository } from '../Domain/VideoRepository'

export class VideoRepositoryMock implements VideoRepository{
    
    videos:Video[]

    constructor(){
        this.videos = [];
    }
    
    create({ video }: { video: Video; }): Video[] {
        this.videos.push(video)
        return this.videos
    }

    read({ uuid }: { uuid: UUID; }) {
        return this.videos.find( video => video.uuid === uuid)
    }

    delete({ uuid }: { uuid: UUID; }) {
        this.videos = this.videos.filter(video => video.uuid !== uuid);
        return this.videos
    }

    update({ video, uuid }: { video: Video; uuid: UUID; }) {
        let index = this.videos.findIndex( video => video.uuid === uuid);
        this.videos[index] = video;
        return 
    }
}