import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <Link href={'/'}>
      <Image src={'/logo.svg'} alt='prepzo-logo' height={100} width={100} className='h-8 w-auto'/>
      </Link>
      {/* Redirects */}
      <div className="flex items-center gap-3">
        <Show when="signed-out">
          {/* Links */}

          {/* Credits */}

          <SignInButton mode='modal'>
            <Button variant="ghost">Sign in</Button>
          </SignInButton>
          <SignUpButton mode='modal'>
            <Button variant="aqua">Sign up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}
