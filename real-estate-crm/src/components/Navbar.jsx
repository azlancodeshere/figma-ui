import {
  Search,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Developments", path: "#" },
  { name: "Buildings", path: "#" },
  { name: "Units", path: "#" },
  { name: "Leads", path: "#" },
  { name: "Companies", path: "#" },
  { name: "Contacts", path: "/contacts" },
  { name: "Deals", path: "#" },
  { name: "Activities", path: "#" },
  { name: "Attorney Firms", path: "#" },
  { name: "Reports", path: "#" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">

      {/* Top Purple Line */}
      <div className="h-3 bg-[#49343F]" />

      <nav className="w-full h-20.5 flex items-center px-5 gap-4">

        
        <Link
          to="/"
          className="flex items-center shrink-0 mr-2"
        >
          
          <div className="text-[#D7AD28] text-[40px] font-light leading-none">
            ◇
          </div>

          <span className="text-[27px] font-bold text-[#292929] ml-1 whitespace-nowrap">
            REALTOR360
          </span>
        </Link>

       
        <div
          className="
            flex
            items-center
            gap-0.5
            flex-1
            min-w-0
            overflow-hidden
          "
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  h-[60px]
                  px-3
                  flex
                  items-center
                  justify-center
                  rounded-[14px]
                  text-[17px]
                  whitespace-nowrap
                  shrink-0
                  transition-colors
                  ${
                    isActive
                      ? "bg-[#DDB52F] text-white"
                      : "text-[#292929] hover:bg-gray-100"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}

          {/* More Button */}
          <button
            type="button"
            className="
              h-[60px]
              min-w-[45px]
              px-2
              flex
              items-center
              justify-center
              text-[#292929]
              hover:bg-gray-100
              rounded-[14px]
              shrink-0
            "
          >
            <MoreHorizontal
              size={25}
              strokeWidth={2.5}
            />
          </button>
        </div>

        
        <div
          className="
            w-[215px]
            min-w-[215px]
            h-[58px]
            bg-[#F5F6F7]
            rounded-[15px]
            flex
            items-center
            px-4
            shrink-0
          "
        >
          <input
            type="text"
            placeholder="Search..."
            className="
              flex-1
              min-w-0
              bg-transparent
              outline-none
              text-[17px]
              text-gray-700
              placeholder:text-gray-500
            "
          />

          <Search
            size={29}
            strokeWidth={2.5}
            className="text-[#292929] shrink-0"
          />
        </div>

        
        <div
          className="
            flex
            items-center
            gap-2
            ml-1
            shrink-0
          "
        >
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
            className="
              w-[56px]
              h-[56px]
              rounded-full
              object-cover
              border
              border-gray-200
            "
          />

          <ChevronDown
            size={20}
            strokeWidth={2.5}
            className="text-black"
          />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;