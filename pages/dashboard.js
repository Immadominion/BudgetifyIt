import Head from "next/head";
import NavItem from "../components/NavItem";
import DarkMode from "../components/DarkMode";
import Logout from "../components/Logout";
import Calendar from "../components/Calendar";
import Budget from "../components/Budget";
import Expenses from "../components/Expenses";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Budgetify</title>
        <meta name="description" content="The Ultimate Finance Tracking App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-5 w-full h-screen bg-black text-white">
        <div className="col-span-1 p-4 border-r border-blue-500 overflow-y-scroll myscrollbar">
          <span className="font-bold text-lg text-blue-500 flex justify-center items-center mt-4 mb-10">
            Budgetify
          </span>
          <ul className="mb-12">
            <NavItem name="Dashboard" />
            <NavItem name="Cards/Accounts" />
            <NavItem name="Collaborations" />
            <NavItem name="Savings" />
            <NavItem name="Calendar" />
            <NavItem name="Settings" />
          </ul>

          <div className="flex h-[60px] p-5 rounded-md justify-between items-center">
            <DarkMode />
            <Logout />
          </div>
        </div>

        <div className="col-span-4">
          <div className="block h-[10vh] p-5 border-b border-blue-500">
            <div className=" px-9 flex justify-between items-center">
              <span className="font-semibold">Dashboard</span>
              <span className="font-semibold">Profile Pic</span>
            </div>
          </div>

          <div className="grid grid-cols-4 w-full h-[90vh]">
            <div className=" overflow-y-scroll myscrollbar col-span-3 p-5 font-bold border-r border-blue-500">
              Main Contents
            </div>
            <div className="col-span-1 p-3 overflow-y-scroll myscrollbar">
              <Calendar />
              <div>
                <span className="font-semibold flex items-center justify-center h-10 bg-blue-800">
                  Main Budgets
                </span>
                <ul className="flex flex-col">
                  <Budget name="Food" />
                  <Budget name="Internet Data" />
                  <Budget name="Shopping" />
                  <Budget name="Utilities" />
                  <Budget name="Electricity" />
                  <Budget name="Miscellaneous" />
                </ul>

                <span className="font-semibold flex items-center justify-center h-10 bg-blue-800">
                  Other Expenses
                </span>
                <ul className=" flex flex-col">
                  <Expenses name="Textbooks" />
                  <Expenses name="A4 Paper" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
