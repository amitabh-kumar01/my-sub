import React from "react";
import Image from "next/image";
import { apple, facebook, google } from "@/assets";
import { signIn } from "next-auth/react";

export const FormIcon = () => {

    const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", { redirect: false });
      if (result?.error) {
        console.error("Google sign-in error:", result.error);
      } else if (result?.ok) {
        console.log("User logged in successfully:", result);
      } else {
        console.log("Sign-in result:", result);
      }
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
    } 
  };

  return (
    <div className="mt-4 flex space-x-3 justify-center gap-1">
      <div className="border border-customForgot bg-slate-100 hover:opacity-85 hover:scale-105 flex justify-center items-center w-28 h-9 rounded-sm">
        <Image src={facebook.src} height={20} width={20} alt="Facebook Icon" />
      </div>

      <div
        className="border border-customForgot bg-slate-100 hover:opacity-85 hover:scale-105 w-28 flex justify-center items-center h-9 rounded-sm cursor-pointer"
        onClick={handleGoogleSignIn} 
      >
        <Image src={google.src} height={20} width={20} alt="Google Icon" />
      </div>
      
      <div className="border border-customForgot bg-slate-100 hover:opacity-85 w-28 hover:scale-105 h-9 flex justify-center items-center rounded-sm">
        <Image src={apple.src} height={20} width={20} alt="Apple Icon" />
      </div>
    </div>
  );
};

{/*
  'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { apple, facebook, google } from '@/assets';

export const FormIcon = () => {
  const { data: session, status } = useSession();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", { redirect: false });
      if (result?.error) {
        console.error("Google sign-in error:", result.error);
      } else {
        console.log("User logged in successfully:", result);
      }
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-4 flex space-x-3 justify-center gap-1">
      {!session ? (
        <>
          <div className="border border-customForgot bg-slate-100 hover:opacity-85 hover:scale-105 flex justify-center items-center w-28 h-9 rounded-sm">
            <Image src={facebook.src} height={20} width={20} alt="Facebook Icon" />
          </div>

          <div
            className="border border-customForgot bg-slate-100 hover:opacity-85 hover:scale-105 w-28 flex justify-center items-center h-9 rounded-sm cursor-pointer"
            onClick={handleGoogleSignIn}
          >
            <Image src={google.src} height={20} width={20} alt="Google Icon" />
          </div>

          <div className="border border-customForgot bg-slate-100 hover:opacity-85 w-28 hover:scale-105 h-9 flex justify-center items-center rounded-sm">
            <Image src={apple.src} height={20} width={20} alt="Apple Icon" />
          </div>
        </>
      ) : (
        <div>
          <p>Signed in as {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

  
  */ }
