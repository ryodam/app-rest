export class Todo {
    title: string;
    description: string;
    finished: boolean;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}