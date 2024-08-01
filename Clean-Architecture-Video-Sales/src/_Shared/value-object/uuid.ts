import { v4 as uuidv4 } from 'uuid';

export class UUID{
    static createUUID():string {
        return uuidv4();
    }
}