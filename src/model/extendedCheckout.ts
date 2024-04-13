export type TExtendedCheckout = {
    id: number;
    userName: string;
    bookName: string;
    requestedDate: Date;
    approvedDate: Date;
    rejectedReason: string;
};