'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function AuthBtn() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>Cerrar sesión</button>
      ) : (
        <button onClick={() => signIn()}>Iniciar sesión</button>
      )}
    </>
  );
}
