import { getCheckOutBooksList } from "@/api/borrow";
import { AllBookCheckoutTable } from "@/components/bookborrow/AllBookCheckoutDataTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const BooksApprovePage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["checkOutBooksList"],
    queryFn: getCheckOutBooksList,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error : {error.message}</div>;

  if (!data) return null;

  return (
    <div>
      <Card className="w-5/6 border-none shadow-none">
        <CardHeader>
          <CardTitle>Book Checkout Request</CardTitle>
          <CardDescription>
            View Pending & Completed Book Checkout Requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 justify-start items-start">
          <div className="flex items-center space-x-2">
            <Checkbox id="pending" />
            <label
              htmlFor="pending"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              View Pending Requests
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="completed" />
            <label
              htmlFor="completed"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              View Completed Requests
            </label>
          </div>
          </div>
          <AllBookCheckoutTable data={data} onChevronClick={(id) => navigate(`/borrow/${id}`)}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default BooksApprovePage;
