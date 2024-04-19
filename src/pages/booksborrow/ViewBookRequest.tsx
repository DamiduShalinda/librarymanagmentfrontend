import { getCheckOutRequestById } from "@/api/borrow";
import ApproveorRejectForm from "@/components/bookborrow/ApproveorRejectForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RootState } from "@/state/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ViewBookRequest = () => {
  const idString = useParams<{ id: string }>().id;
  const id: number = parseInt(idString!);
  const naviate = useNavigate();
  const loginResponse = useSelector((state: RootState) => state.login);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getCheckOutRequestById", id],
    queryFn: () => getCheckOutRequestById(id),
  });


  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error : {error.message}</div>;

  if (!data) return null;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Button onClick={() => naviate("/")} variant={"secondary"}>Back</Button>
      </div>
      <div className="flex flex-row items-start justify-evenly">
          <div id="user_details" className="w-1/2 flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">User</h3>
                <div className="flex flex-row gap-2">
                    <span className="font-medium">User Name : </span>
                    <span>{data.user.name}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium">Email : </span>
              <span>{data.user.email}</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-medium">Request Isussed Date : </span>
                <span>{data.borrowedDate.toString()}</span>
            </div>
            <div>
            {data.isApproved ? (<Badge variant={"default"}>Approved</Badge>) : data.rejectedReason ? (<Badge variant={"destructive"}>Rejected</Badge>) : <Badge variant={"destructive"}>Pending</Badge>}
            </div>
            </div>
            <div id="book_table" className="w-full flex flex-col">
              <h3 className="text-2xl font-semibold">Books</h3>
              <Table className="w-2/3">
                <TableCaption>The Book list of checkout request.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Index</TableHead>
                    <TableHead className="font-medium">BookName</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.books.map((book, index) => (
                    <TableRow key={book.id}>
                    <TableCell className="font-medium">{index}</TableCell>
                    <TableCell className="font-medium capitalize">{book.bookName}</TableCell>
                    <TableCell>{book.isbn}</TableCell>
                    <TableCell>{book.status == "NotAvailable" ? <Badge variant={"destructive"}>{book.status}</Badge> : <Badge>{book.status}</Badge> }</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
      </div>
      {loginResponse.role === "Admin" && <ApproveorRejectForm id={id} />}
    </div>
  );
};

export default ViewBookRequest;
