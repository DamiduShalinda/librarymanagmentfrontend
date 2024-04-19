export interface TExtendedCheckout {
  id: number;
  borrowedDate: Date;
  isApproved: boolean;
  rejectedReason: string;
  books: Book[];
  user: User;
}

interface User {
  userId: string;
  name: string;
  email: string;
}

interface Book {
  id: number;
  bookName: string;
  isbn: string;
  status: "Available" | "NotAvailable" | "Pending";
}