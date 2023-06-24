const Budget = ({name}) => {
    return (
      <span className="font-semibold w-full h-[70px] rounded-md hover:bg-blue-500 cursor-pointer hover:text-black mb-4 flex justify-center items-center">
        {name} Budget
      </span>
    );
}

export default Budget;