import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

export default function Home() {
  return (
    <main>
      <section className="grid md:grid-cols-2 h-[90vh] grid-rows-2 md:grid-rows-1 ">
        <div className=" flex justify-start relative ">
          <Image
            className="object-contain"
            alt="Image of team"
            src="/team.png"
            fill={true}
          />
        </div>
        <div className=" flex flex-col gap-8 md:gap-16 justify-center items-center p-4">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            Your links, reimagined.
          </p>
          <p className={`text-lg font-medium`}>
            Shortify is a sleek and simple tool to transform long URLs into
            short, shareable links.
          </p>
          <div className="flex justify-center items-center gap-10">
            <Link href="/generate">
              <button
                className={`bg-teal-100 shadow-lg p-2 rounded ${poppins.className}`}
              >
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/Vignesh6236/Shortify">
              <button
                className={`bg-teal-100 shadow-lg p-2 rounded ${poppins.className}`}
              >
                Github
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
