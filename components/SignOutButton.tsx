'use client';
import { signOut } from '@/lib/actions/auth.action';
import React from 'react';
import { Button } from './ui/button';

export default function SignOutButton() {
  return (
    <Button type="button" variant={'destructive'} onClick={signOut}>
      Sign Out
    </Button>
  );
}
