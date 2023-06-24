import Head from "next/head";
import NavItem from "../components/NavItem";
import DarkMode from "../components/DarkMode";
import Logout from "../components/Logout";
import Calendar from "../components/Calendar";
import Budget from "../components/Budget";
import Expenses from "../components/Expenses";

export default function Home() {
  return (
    <>
      <Head>
        <title>Budgetify</title>
        <meta name="description" content="The Ultimate Finance Tracking App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-950">
        <nav className="h-16 flex items-center justify-between px-4 pt-2">
          <span className="font-bold text-blue-600 text-xl font-serif mr-20 w-fit">
            Budgetify
          </span>
          <div className="w-full h-full pt-3.5">
            <ul className="flex justify-between w-full text-white font-serif text-sm h-full">
              <li className="hover:bg-blue-300 px-3 rounded-t-md flex justify-center items-start pt-2">
                Features
              </li>
              <li className="hover:bg-blue-300 px-3 rounded-t-md flex justify-center items-start pt-2">
                Why Budgetify
              </li>
              <li className="hover:bg-blue-300 after:bg-blue-300 before:bg-blue-300 after:w-5 before:w-5 after:h-5 before:h-5 after:z-1 before:z-1 before:absolute before:bottom-0 after:absolute after:bottom-0 px-3 rounded rounded-t-md flex justify-center items-start pt-2">
                Pricing
              </li>
              <li className="bg-blue-300 px-3 rounded-tr-xl flex justify-center items-start pt-2">
                Login / Sign Up
              </li>
            </ul>
          </div>
        </nav>

        <div className="bg-blue-300 w-[90vw] ml-auto mr-4 rounded-tl-2xl p-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          facilis voluptate ullam eum officia accusamus, corporis, explicabo
          aspernatur modi ipsum atque sunt quam debitis suscipit delectus dolor,
          ipsa numquam repudiandae! Placeat quibusdam doloremque itaque non
          saepe magnam recusandae accusan
        </div>
      </main>
    </>
  );
}
