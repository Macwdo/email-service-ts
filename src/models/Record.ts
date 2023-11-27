export default class Record {
    id: number;
    sender_id: number;
    sender_email: string;
    receiver_email: string;
    success: boolean;
    content: string;
    created_at: Date;
    updated_at: Date;

    private static nextId: number = 1;

    constructor(
        sender_id: number,
        sender_email: string,
        receiver_email: string,
        success: boolean,
        content: string,
    ) {
        this.id = Record.nextId++;
        this.sender_id = sender_id;
        this.sender_email = sender_email;
        this.receiver_email = receiver_email;
        this.success = success;
        this.content = content;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
