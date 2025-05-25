/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tDS2Suz3yh5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

    import { zodResolver } from "@hookform/resolvers/zod"
    import { useForm } from "react-hook-form"
    import { z } from "zod"
    
    import { Button } from "@/components/ui/button"
    import {
      Form,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
    } from "@/components/ui/form"
    import { Input } from "@/components/ui/input"
    
    const formSchema = z.object({
      ssid: z.string(),
      password: z.string(),
      mask: z.string(),
    })
export default function LoginForm() {

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ssid: "",
      password: "",
      mask: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Card className="w-full max-w-lg">
<CardHeader>
        <CardTitle>Join WiFi</CardTitle>
        <CardDescription>Enter the information to join the WiFi network.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="ssid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SSID Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
              control={form.control}
              name="mask"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subnet Mask</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        </CardContent>
        </Card>
        /*
      )
    }
    */
    /*
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Join WiFi</CardTitle>
        <CardDescription>Enter the information to join the WiFi network.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={() => console.log('###')}>
          <div className="space-y-2">
            <Label htmlFor="ssid">SSID</Label>
            <Input id="ssid" placeholder="Enter the SSID" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Enter the password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mask">Network Mask</Label>
            <Input id="mask" placeholder="Enter the network mask" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button  default>Connect to Network</Button>
      </CardFooter>
    </Card>*/
  )
}

