export interface ITodo {
    createdAt:   Date;
    updatedAt:   Date;
    disabledAt:  Date;
    id:          string;
    title:       string;
    description: string;
    status:      string;
    disable:     boolean;
}

export interface ITodoInsertResponse  {
    message:   string;
    data:      ITodo;
}

export interface ITodoInsertRequest {
    title:       string;
    description: string;
    status?:      string;
}
