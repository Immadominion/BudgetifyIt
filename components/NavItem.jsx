import Link from "next/link";

const NavItem = ({name}) => {
    return (
      <li className="w-full h-[50px] rounded-md hover:bg-blue-500 cursor-pointer hover:text-black mb-4 flex justify-center items-center">
        <Link href="/" className="h-full">
          <span className=" font-medium">{name}</span>
        </Link>
      </li>
    );
}

export default NavItem;