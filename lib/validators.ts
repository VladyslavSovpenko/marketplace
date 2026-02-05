import {z} from 'zod';
import {formatNumberWithDecimal} from "./utils";

const currency = z
    .string()
    .refine(
        (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
        'Price must have exactly two decimal places'
    );

export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name is too short').max(255, 'Name is too long'),
    slug: z.string().min(3, 'Slug is too short').max(255, 'Slug is too long'),
    category: z.string().min(3, 'Category is too short').max(255, 'Category is too long'),
    brand: z.string().min(3, 'Brand is too short').max(255, 'Brand is too long'),
    description: z.string().min(3, 'Description is too short').max(255, 'Description is too long'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
})

// Schema for user signing in
export const signInFormSchema = z.object({
    email: z.string().email("Email is too short").max(255, 'Name is too long'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});