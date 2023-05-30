
export class EventListDto {
    id: number;
    description: string;
    title: string;
    imgSrc: string;

    constructor(obj?: any) {
        this.id = obj?.id || 0;
        this.description = obj?.description || '';
        this.title = obj?.title || '';
        this.imgSrc = obj?.thumbnail ? `${obj?.thumbnail.path}.${obj?.thumbnail.extension}` : '';
    }
}