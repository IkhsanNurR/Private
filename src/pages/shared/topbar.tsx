import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar({ showNav, setShowNav }: any) {
  const [token, setToken] = useState("");
  const router = useRouter();
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("reftoken");
    router.push("/login");
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("token") || "");
  }, []);

  return (
    <div
      className={` mt-16 bg-blue-500  fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] z-30 ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="md:pl-3">
        <MenuIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        {/* <div>
          <Image
            src={logo}
            className="rounded-l h-8 md:mr-4 shadow-sm"
            alt="profile picture"
            width={150} // Ubah sesuai kebutuhan Anda
            height={100} // Sesuaikan dengan lebar gambar
          />
        </div> */}
        {token ? (
          <button>
            <LogoutIcon
              className="h-full w-10 text-neutral-950 cursor-pointer"
              onClick={logout}
            />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
