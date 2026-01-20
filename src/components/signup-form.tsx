'use client';
import { Button } from '@/components/ui/button';
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

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="rounded-xl bg-white p-8">
      <FieldGroup>
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <Field>
          <FieldLabel className="text-beige-500">Name</FieldLabel>
          <Input type="name" className="border-beige-500 h-12" />
        </Field>
        <Field>
          <FieldLabel className="text-beige-500">Email</FieldLabel>
          <Input type="email" className="border-beige-500 h-12" />
        </Field>
        <Field>
          <FieldLabel className="text-beige-500">Create Password</FieldLabel>
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
          <FieldDescription className="text-beige-500 text-right">
            Passwords must be at least 8 characters
          </FieldDescription>
        </Field>
        <Field>
          <Button type="submit" className="h-12 bg-black font-bold text-white">
            Create Account
          </Button>
        </Field>
        <Field>
          <FieldDescription className="text-beige-500 flex items-center justify-center">
            Already have an account?
            <Link href="/login" className="ml-1 font-bold text-black">
              Login
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
