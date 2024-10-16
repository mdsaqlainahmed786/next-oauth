"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h1 className="text-4xl font-semibold  text-white mb-4">
              Welcome to your Dashboard
            </h1>
            <Image
              src={session.user?.image}
              alt={session.user?.name}
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
            <p className="mt-4 text-xl  text-white">
              Welcome, <span className="font-medium">{session.user.name}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-white text-center font-bold text-4xl mb-6">
            Sign in/Sign up to access the dashboard
          </h1>
        </div>
      )}
    </>
  );
};

export default Dashboard;
