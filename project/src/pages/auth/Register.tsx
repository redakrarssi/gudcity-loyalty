import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, UserCircle } from 'lucide-react';

import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../hooks/useAuth';

const registerSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters long')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const { register: signUp } = useAuth();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  
  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    setRegisterError(null);
    
    try {
      await signUp(data.email, data.password);
      navigate('/setup');
    } catch (error: any) {
      console.error('Registration error:', error);
      
      if (error.code === 'auth/email-already-in-use') {
        setRegisterError('This email is already in use. Please try another or sign in.');
      } else {
        setRegisterError('There was an error creating your account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create your account</h2>
      
      {registerError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {registerError}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input
            label="Email address"
            type="email"
            id="email"
            autoComplete="email"
            fullWidth
            leftIcon={<Mail className="h-5 w-5 text-gray-400" />}
            error={errors.email?.message}
            {...register('email')}
          />
        </div>
        
        <div>
          <Input
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            fullWidth
            leftIcon={<Lock className="h-5 w-5 text-gray-400" />}
            error={errors.password?.message}
            helperText="Password must be at least 6 characters long"
            {...register('password')}
          />
        </div>
        
        <div>
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            fullWidth
            leftIcon={<Lock className="h-5 w-5 text-gray-400" />}
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
        </div>
        
        <div>
          <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
            Create account
          </Button>
        </div>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;