import { UUID } from "../../_Shared/value-object/uuid"
import { Video } from "../../Video/Domain/Video"

export type Serie = {
    name:string,
    uuid: UUID,
    chapters:Video[]
}