import { UUID } from "../../_Shared/value-object/uuid";
import { Video } from "./Video"

export interface VideoRepository{
    create({
        video
    }:{
        video:Video
    }): Video[];

    read({
        uuid
    }:{
        uuid:UUID
    })

    update({
        video,
        uuid
    }:{
        video:Video,
        uuid:UUID
    })

    delete({uuid}:{uuid:UUID})
}