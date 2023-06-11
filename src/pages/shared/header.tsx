// import Image from "next/image";
// import logo from "../../../public/images/logo3.png";
// import { Badge, IconButton } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";

// const Header = (props: any) => {
//   return (
//     <div className="bg-white w-full justify-between z-30 top-0 fixed">
//       <div>
//         <Image
//           src={logo}
//           className=" h-16 md:ml-8 shadow-sm mb-2"
//           alt="profile picture"
//           width={180} // Ubah sesuai kebutuhan Anda
//           height={100} // Sesuaikan dengan lebar gambar
//         />
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           className="bg-black text-black"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default Header;

import Image from "next/image";
import logo from "../../../public/images/logo3.png";
import { Badge, IconButton, Tooltip } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = (props: any) => {
  return (
    <div className="bg-white w-full justify-between z-30 top-0 fixed">
      <div className="flex items-center">
        <Image
          src={logo}
          className="h-10 w-auto md:ml-8 shadow-sm mb-2 mt-4"
          alt="profile picture"
          // width={180} // Ubah sesuai kebutuhan Anda
          // height={80} // Sesuaikan dengan lebar gambar
        />
      </div>
    </div>
  );
};

export default Header;
