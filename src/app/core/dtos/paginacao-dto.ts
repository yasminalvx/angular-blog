export class PaginacaoDTO<T> {
    count: number = 0;
    limit: number = 20;
    offset: number = 0;
    results: Array<T> = new Array<T>();
    total: number = 0;

    constructor(obj?: any) {
        if (obj) {
            this.count = obj.count;
            this.limit = obj.limit;
            this.offset = obj.offset;
            this.results = obj.results.map((item: any) => item as T);
            this.total = obj.total;
        }
    }
}


