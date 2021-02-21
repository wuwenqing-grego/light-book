type RecordItem = {
    tags: Tag[];
    note: string;
    type: string;
    amount: number;
    createdAt?: Date;
}

type Tag = {
    id: string;
    name: string;
}