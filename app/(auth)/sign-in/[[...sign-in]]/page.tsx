'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return <SignIn afterSignInUrl="/dashboard" redirectUrl="/dashboard" />;
} 