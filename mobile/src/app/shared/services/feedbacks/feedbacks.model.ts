export class Feedback {
    constructor(
        public id: number,
        public message: string,
        public submitted_by: number,
        public last_modified_by: string,
        public created_at: string,
        public last_modified_at: string
    ) {}
}