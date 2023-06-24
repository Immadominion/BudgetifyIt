const Expenses = ({name}) => {
    return (
      <span className="font-semibold w-full h-[70px] rounded-md hover:bg-green-500 cursor-pointer hover:text-black mb-4 flex justify-center items-center">
        {name} Expenses
      </span>
    );
}

export default Expenses;