import { CompletedCheckoutSchema, TCompletedCheckout } from '@/schema/completedCheckoutSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const CompleteCheckoutBooksForm:React.FC<{id : number}> = ({id}) => {

    const form = useForm<TCompletedCheckout>({
        resolver: zodResolver(CompletedCheckoutSchema),
        defaultValues: {
            id: id,
            remarks: "",
        },
      })

    //todo: implement onSubmit on complete checkout request
    const onSubmit = (data : TCompletedCheckout) => {
        console.log(data);
    }

    

      
  return (
    <div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rejected Reason</FormLabel>
                <FormControl>
                  <Input placeholder="remarks" {...field} />
                </FormControl>
                <FormDescription>
                  Add remarks for this checkout
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Complete</Button>
        </form>
      </Form></div>
  )
}

export default CompleteCheckoutBooksForm