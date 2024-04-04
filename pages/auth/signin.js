import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Button } from "@mui/material";
import {FcGoogle, fcGoogle} from 'react-icons/fc';
import { BsSpotify } from 'react-icons/bs';
import { FaSignOutAlt } from "react-icons/fa";
import { signIn,signOut } from "next-auth/react";
import { Merriweather } from "next/font/google";
import { useSession } from "next-auth/react";

const MerriReg900 = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: '900'
  });
  

export default function Signin () {
    const {data:session} = useSession();

    const router = useRouter();

    useEffect(() => {
    session ? router.push('/admin/create-product') : null;
    },[session]);

    console.log('Logged user',session?.user.name);
    return(
        <>
        <Head>
            <title>Sigin Irun</title>
        </Head>
        <main className="h-screen flex justify-center items-center bg-slate-200 px-2 md:px-0 py-4 md:py-0">
            <div className="h-2/3 w-full md:w-[320px] flex flex-col items-center gap-6 bg-slate-50 border border-slate-200 rounded-md py-3
            md:py-6 px-2 md:px-4">
            <h2 className={`${MerriReg900.className} teext-2xl  text-slate-800`}>Get started or continue with an option</h2>


                <Button variant="contained"
                className="w-full py-3 bg-slate-800 flex flex-row justify-between"
                onClick={() => signIn( 'google' )}>Continue With<FcGoogle className="text-3xl"/></Button>

                <Button variant="contained"
                className="w-full py-3 bg-green-800 flex flex-row justify-between"
                onClick={() => signIn( 'Spotify' )}>Continue With SPOTIFY<BsSpotify  className="text-3xl"/></Button>
               
                <Button variant="contained"
                className="w-full py-3 bg-rose-800 flex flex-row justify-between"
                onClick={() => signOut()}>Sign Out <FaSignOutAlt className="text-2xl"/></Button>
            </div>
        </main>
        </>
    )
}