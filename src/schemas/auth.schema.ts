import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.enum(['admin', 'doctor', 'patient']),
});

export const signInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const changePasswordSchema = z.object({
  password: z.string(),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
