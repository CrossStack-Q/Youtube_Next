import React from "react";
import Head from "next/head";
import { getProviders,signOut } from "next-auth/react";
import { Button, Text } from "@nextui-org/react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import  Main1 from "./index"

function Login({ providers }) {
  const { data: session } = useSession();
  if (session) return <Main1 />;


  // useEffect(() => {
  //   if (session?.error === "RefreshAccessTokenError") {
  //     signIn(); // Force sign in to hopefully resolve error
  //   }
  // }, [session]);



  return (
    <main>
      <Head>
        <title>Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button onClick={signIn}>
            Sign In
        </Button>
      </div>
    </main>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
