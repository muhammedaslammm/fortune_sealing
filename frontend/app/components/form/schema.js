import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is Required"),
  email: z.string().email("Enter Valid Email"),
  message: z.string().min(10, "Required Atleast 10 Characters"),
  phone: z.string().regex(/\d/, "Enter a valid number"),
});

export default schema;
