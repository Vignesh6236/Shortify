import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
})


export default function Home() {


  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-16 justify-end items-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>Your links, reimagined.</p>
          <p className={`text-lg font-medium`}>Shortify is a sleek and simple tool to transform long URLs into short, shareable links.</p>
          <div className="flex justify-center items-center gap-10">
            <Link href="/generate"><button className={`bg-teal-100 shadow-lg p-2 rounded ${poppins.className}`}>Try Now</button></Link>
            <Link href="https://github.com/Vignesh6236/Shortify"><button className={`bg-teal-100 shadow-lg p-2 rounded ${poppins.className}`}>Github</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image alt="Image of team" src="/team.png" fill={true} />
        </div>
      </section>
    </main>
  );
}
