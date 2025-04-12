import { z } from 'zod';

export const portfolioSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  position: z.string().min(2, 'Please enter your desired position'),
  introduction: z.string().min(10, 'Introduction must be at least 10 characters'),
  skills: z.string().min(2, 'Please enter your skills'),
  experience: z.string().min(10, 'Please enter your experience'),
  projects: z.string().min(10, 'Please enter your projects'),
  education: z.string().min(10, 'Please enter your education'),
  links: z.object({
    github: z.string().url('Invalid URL format').optional(),
    linkedin: z.string().url('Invalid URL format').optional(),
    website: z.string().url('Invalid URL format').optional(),
  }),
  style: z.enum(['Modern', 'Professional', 'Fun', 'Minimalist']),
  language: z.enum(['th', 'en'])
});
