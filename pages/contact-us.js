import Head from "next/head";
import Link from "next/link";
import { Merriweather } from "next/font/google";
import { FaMapPin } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { themeColors } from "@/utils/themes";

const MerriReg400 = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
});

export default function contactUs() {
    return (
        <>
            <Head>
                <title>Contact Us | Irun</title>
            </Head>
            <main className=" flex flex-col gap-6 px-4 md:px-16 lg:px-32 py-8 md:py-16">
                <h1 className={`${MerriReg400.className} text-5xl text-center`}>Contact Us</h1>

                {/* this is a top session */}
                <div className="flex flex-col gap-4">
                    <blockquote className="min-h-32 bg-[#F8F4EC] flex flex-row gap-4 justify-center items-center
             border border-gray-300 rounded-md shadow-md">
                        <FaMapPin className={`text-[${themeColors.strongPink}]text-5xl`} />
                        <p className="text-2xl">1st Floor, Plot B53 Gada Nasko Road, Kubwa, Abuja, Nigeria.</p>
                    </blockquote>
                    <div className="grid md:grid-cols-2 gap-4">

                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center
             border border-gray-300 rounded-md shadow-md">
                            <IoMdMailOpen className="text-5xl" />
                            <Link href="mailto:calebrandy@gmail.com" className="text-2xl">sales@irun.com</Link>
                        </blockquote>

                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center
             border border-gray-300 rounded-md shadow-md">
                            <FaPhoneAlt className="text-5xl" />
                            <Link href="tel:07023336454" className="text-2xl">07023336454</Link>
                        </blockquote>

                    </div>

                </div>

                {/* lower session */}

                <div>
                    <h2 className={`${MerriReg400.className} text-3xl text-center`}>Engage With Us Across Our Platforms</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center
                             border border-gray-300 rounded-md shadow-md">
                            <FaInstagram className={`text-[#D63484] text-5xl`} />
                            <Link href="https://instagram.com/early_code_tech" className="text-2xl">@early_code_tech</Link>
                        </blockquote>

                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center
                             border border-gray-300 rounded-md shadow-md">
                            <FaFacebook className={`text-[${themeColors.strongPink}] text-5xl`} />
                            <Link href="https://instagram.com/early_code_tech" className="text-2xl">@early_code_tech</Link>
                        </blockquote>
                        
                        <blockquote className="min-h-32 flex flex-row gap-4 justify-center items-center
                             border border-gray-300 rounded-md shadow-md">
                            <FaXTwitter className={`text-[${themeColors.strongPink}] text-5xl`} />
                            <Link href="https://instagram.com/early_code_tech" className="text-2xl">@early_code_tech</Link>
                        </blockquote>

                    </div>
                </div>
            </main>

        </>
    )
}