export interface APIResponse {
    error: number;
    data?: any;
    message?: string;
}

export interface statisticAPIResponseSuccess extends APIResponse {
    error: 0;
    data: {
        users: {
            registered: number;
            patients: number;
            doctors: number;
            records: number;
        };
        consultations: {
            all: number;
            done: number;
            waiting: number;
            canceled: number;
        };
    };
}
