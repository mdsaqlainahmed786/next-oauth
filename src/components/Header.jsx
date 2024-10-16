"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
function Header() {
  const { data: session } = useSession();
  return (
    <div className="w-full bg-[#1F1F1F]">
      <div className="flex justify-between items-center mx-auto w-full max-w-[80vw] py-4 lg:max-w-[90vw]">
        <Link href="/">
          <div className="cursor-pointer">
            <h1 className="text-3xl font-bold text-white">Header</h1>
          </div>
        </Link>
        {session ? (
          <div className="space-x-5 text-white">
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-x-5 text-white">
            <Link href="/sign-up">
              <button>Sign Up</button>
            </Link>
            <Link href="/sign-in">
              <button>Sign In</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
