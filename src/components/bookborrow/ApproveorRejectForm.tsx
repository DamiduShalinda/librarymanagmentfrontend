import { TRejectedReason, rejectedResonSchema } from "@/schema/rejectedReason";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { approveBooks } from "@/api/borrow";

const ApproveorRejectForm: React.FC<{ id: number }> = ({ id }) => {
  const [showRejectedReasonField, setShowRejectedReasonField] = useState(false);

  const form = useForm<TRejectedReason>({
    resolver: zodResolver(rejectedResonSchema),
    defaultValues: {
      id: id,
      rejectedReason: "",
    },
  });

  const approveRequestMutate = useMutation({
    mutationFn: () => approveBooks( id , form.getValues().rejectedReason ),
    onError: (error, data) => {
      console.log(data);
      console.error(error);
    },
    onSuccess: () => {
      console.log("Approved");
    },
  })

  const handleApprove = () => {
    approveRequestMutate.mutate();
  };

  const handleRejectFormOnSubmit = (data: TRejectedReason) => {
    approveRequestMutate.mutate();
  };

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <Button onClick={() => handleApprove()}>Approve</Button>
        {!showRejectedReasonField && (
          <Button onClick={() => setShowRejectedReasonField(true)}>
            Reject
          </Button>
        )}
      </div>
      {showRejectedReasonField && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRejectFormOnSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="rejectedReason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rejected Reason</FormLabel>
                  <FormControl>
                    <Input placeholder="reason" {...field} />
                  </FormControl>
                  <FormDescription>
                    Reason For Rejecting this request
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Reject</Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ApproveorRejectForm;
