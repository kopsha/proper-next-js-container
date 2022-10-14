import { v4 as uuidv4 } from "uuid";

export class StickyNote {
    constructor(id, message, author = null, rank = null) {
        this.id = id;
        this.message = message;
        this.rank = parseInt(rank) || 0;
        this.author = author || uuidv4();
    }
}
