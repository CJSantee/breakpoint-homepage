import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="AppIcon.png"
          alt="Pool Scores App Icon"
          width={180}
          height={38}
          priority
        />
        <span>Pool Scores</span>
      </main>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-neutral-900 sticky top-[100vh]">
        <div className="w-full mx-auto max-w-screen-xl p-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://colinjsantee.com/" className="hover:underline">
              Colin Santee
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 justify-center">
            <li>
              <Link href="/privacy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      
    </div>
  );
}
