
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";



const MerriReg900 = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: '900'
});

export default function Index() {
  return (
    <>
      <Head>
        <title>Irun | Shop for hairs with fixes</title>
      </Head>

      <main className="h-screen">
        <div className="h-full w-full hidden lg:flex justify-center items-center bg-desktop">
          <div className="h-full w-full bg-[#402b3a]/60 flex justify-center items-center">
            <div className="w-full md:w-[520px] flex flex-col items-center gap-6 px-4 md:px-0">
              <h1 className={`${MerriReg900.className} text-4xl text-center lg:text-6xl text-[#f8f4ec]`}>Shop for hair and book an appointment for a fix</h1>
              <Link
                href='/auth/signup'
                className="h-[48px] flex justify-center md:w-[300px] items-center bg-[#402b3a] text-[#F8F4EC] gap-4 text-2xl px-4
              rounded-md">
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

        </div>

        <div className="h-full w-full  lg:hidden justify-center items-center bg-mobile">
          <div className="h-full w-full bg-[#402b3a]/60 flex justify-center items-center">
            <div className="w-full md:w-[520px] flex flex-col items-center gap-6 px-4 md:px-0">
              <h1 className={`${MerriReg900.className} text-4xl text-center lg:text-6xl text-[#f8f4ec]`}>Shop for hair and book an appointment for a fix</h1>
              <Link
                href='/auth/signup'
                className="h-[48px] flex justify-center md:w-[300px] items-center bg-[#402b3a] text-[#F8F4EC] gap-4 text-2xl px-4
               rounded-md">
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* shop intro section */}

        <section className="min-h-[420px] grid grid-cols-3 bg-black">
          <article className=" flex justify-center items-center bg-yellow-400">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/bg_desktop.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

          </article>
          <aside className="col-span-2 p-16 bg-green-400">
            <div className="grid grid-cols-2 gap-2">
              <Image width={300} height={400} src='/hair_hori.jpg' />

              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <Image width={200} height={200} src='/hair_1.jpg' alt="hair sample"/>
                <Image width={200} height={200} src='/hair_2.jpg' alt="hair sample"/>
                <Image width={200} height={200} src='/hair_3.jpg' alt="hair sample"/>
                <Image width={200} height={200} src='/hair_4.jpg' alt="hair sample"/>
              </div>
            </div>

          </aside>
        </section>

      </main>
    </>
  );
}