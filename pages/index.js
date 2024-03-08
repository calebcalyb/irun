import Link from "next/link";

export default function Index() {
  return (
    <>
      <main className="h-screen">
        <div className="h-full w-full hidden lg:flex justify-center items-center bg-desktop">
          <div className="h-full w-full bg-[#402b3a]/60 flex justify-center items-center">
            <div className="w-full md:w-[520px] flex flex-col items-center gap-6 px-4 md:px-0">
              <h1 className="text-4xl text-center lg:text-6xl text-[#f8f4ec]">Shop for hair and book an appointment for a fix</h1>
              <Link href='/auth/signup' className="h-[48px] flex justify-center md:w-[300px] items-center bg-[#402b3a] text-[#F8F4EC] text-2xl px-4
              rounded-md"> Get Started</Link>
            </div>
          </div>

        </div>

        <div className="h-full w-full lg:hidden bg-mobile">

        </div>
      </main>
    </>
  );
}