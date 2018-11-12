import { Thumbnails } from './thumbnails';
export { Thumbnails } from './thumbnails';


export class Book {
    constructor(
        public isbn: string,
        public title: string,
        public authors: string[],
        public published: Date,
        public subtitle?: string,
        public rating?: number,
        public thumbnails?: Thumbnails[],
        public description?: string,
        ) { }
}
