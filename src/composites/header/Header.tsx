import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-[10vh] flex items-center justify-between">
      <div className="flex items-center   ">
        <h1 className="text-2xl font-semibold px-4">
          <Link to="/">Atul Tiwari</Link>
        </h1>
     
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ?  " text-xl pt-1 pl-4  text-[#21C55D]":"text-xl pt-1 pl-4  text-gray-300 hover:text-[#21C55D]"
          }
        >
          Projects
        </NavLink>
      </div>
      <div className="px-6 py-2 hover:delay-200 hover:bg-green-500">
        <button
          className="flex"
          onClick={() => scrollToSection("hire-me-section")}
        
        >
          Hire Me <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Header;
