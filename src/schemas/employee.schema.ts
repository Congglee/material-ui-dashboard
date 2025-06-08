import z from 'zod'
import { EmployeeDepartmentValues } from '~/constants/type'

export const employeeSchema = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  joinDate: z.string(),
  department: z.string()
})

export type EmployeeType = z.TypeOf<typeof employeeSchema>

export const CreateEmployeeBody = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  age: z
    .number()
    .refine(
      (val) => {
        const numVal = typeof val === 'string' ? parseInt(val, 10) : val
        return !isNaN(numVal) && isFinite(numVal)
      },
      { message: 'Age must be a valid number' }
    )
    .transform((val) => (typeof val === 'string' ? parseInt(val, 10) : val))
    .refine((val) => val >= 0, { message: 'Age cannot be negative' })
    .refine((val) => val <= 150, { message: 'Age must be realistic (max 150)' }),
  join_date: z.coerce.date(),
  department: z.enum(EmployeeDepartmentValues)
})

export type CreateEmployeeBodyType = z.TypeOf<typeof CreateEmployeeBody>
