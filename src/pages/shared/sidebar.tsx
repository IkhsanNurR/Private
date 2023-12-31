import { forwardRef, LegacyRef } from "react";
import Link from "next/link";
import CottageIcon from "@mui/icons-material/Cottage";
import PeopleIcon from "@mui/icons-material/People";

// import logo from "../../images/logo.png";
// import logo_honda from "../../images/honda.svg";
import { useRouter } from "next/router";
import Image from "next/image";

//prettier-ignore
const SideBar = forwardRef(({}, ref:LegacyRef<HTMLDivElement>) => {
  const router = useRouter();
  const listMenu = [
    { to: "/", path: "/", icon: <CottageIcon />, name: "Dashboard" },
    { to: "/users", path: "users", icon: <PeopleIcon />, name: "Users" },
    { to: "/batch", path: "batch", icon: <PeopleIcon />, name: "Batch" },
    { to: "/candidat", path: "candidat", icon: <PeopleIcon />, name: "Candidats" },
    { to: "/talent", path: "talent", icon: <PeopleIcon />, name: "Talent" },
  ];
  return (
    <div ref={ref} className="fixed mt-16 w-56 h-full bg-white shadow-sm z-30">
      <div className="flex justify-center mt-6 mb-14">
        {/* <Image
        className="w-32 h-auto" src={logo_honda} alt="company logo" 
        /> */}
      </div>

      <div className="flex flex-col">
        {(listMenu || []).map((mn) => (
          <Link href={`${mn.to}`}>
            <div
              className={`text-black pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
              ${router.pathname == mn.path}
              ? "bg-orange-100 text-black-500"
              : "text-gray-400 hover:bg-codex-biru-muda "
              }`}
            >
              <div className="mr-2">
                {mn.icon}
              </div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
