import { object, string, TypeOf } from "zod";

const createUserSchema = object({
  body: object({
    firstname: string({
      required_error: "firstname is a reuired field"
    }),
    lastname: string({
      required_error: "lastname is a required field"
    }),

    phone: string({
      required_error: 'phone is a required field'
    }).min(10, { message: 'Phone is too short - should be at least 10 char' }),
    email: string({
      required_error: "Email is a required field"
    }),

    password: string({
      required_error: 'Password is a required field'
    }).min(6, { message: 'Password is too short - must be at least 6 char' }),
    confirmPassword: string({
      required_error: 'Confirm password is a required field'
    })

  }).refine(data => data.password === data.confirmPassword, { message: 'Password does\'t match' })
});

export default createUserSchema;

export type createUseInput = TypeOf<typeof createUserSchema>;
