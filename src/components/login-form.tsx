'use client';
import { Button } from '@/components/ui/button';
// import { Eye, EyeOff } from 'lucide-react';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="rounded-xl bg-white p-8">
      <FieldGroup>
        <h1 className="text-3xl font-bold">Login</h1>
        <Field>
          <FieldLabel className="text-beige-500">Email</FieldLabel>
          <Input type="email" className="border-beige-500 h-12" />
        </Field>
        <Field>
          <FieldLabel className="text-beige-500">Password</FieldLabel>

          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              className="border-beige-500 h-12"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="text-beige-500 absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
            >
              {showPassword ? (
                <Image src="/eye-off.svg" alt="Hide" width={16} height={16} />
              ) : (
                <Image src="/eye.svg" alt="Show" width={16} height={16} />
              )}
            </Button>
          </div>
        </Field>
        <Field>
          <Button type="submit" className="h-12 bg-black font-bold text-white">
            Login
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-beige-500 flex items-center justify-center">
            Need to create an account?
            <Link href="/signup" className="ml-1 font-bold text-black">
              Sign Up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
