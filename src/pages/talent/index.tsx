import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuProps,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  alpha,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import logo from "../../../public/images/logo3.png";
import { useRouter } from "next/router";

interface Column {
  id: "name" | "code" | "population" | "size";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: "name",
    label: "Name",
    align: "center",
    minWidth: 170,
  },
  {
    id: "code",
    label: "ISO\u00a0Code",
    align: "center",
    minWidth: 100,
  },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
  // aksi: any
): Data {
  // const density = population / size;
  return { name, code, population, size };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Talent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const router = useRouter();

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} className="mt-20">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className="bg-gray-200 text-center">Avatar</TableCell>
              {columns.map((column) => (
                <>
                  <TableCell
                    className="bg-gray-200"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                </>
              ))}
              {/* <TableCell className="bg-gray-200 text-center">Aksi</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>
                      <AvatarGroup total={24}>
                        <Avatar
                          alt="Remy Sharp"
                          src="./images/logo3.png"
                          // className="w-10 h-100"
                          style={{ width: "30px", height: "30px" }}
                          onClick={() => router.push("/users")}
                        />
                        <Avatar
                          alt="Travis Howard"
                          src="./images/logo2.png"
                          // className="w-10 h-100"
                          style={{ width: "30px", height: "30px" }}
                          onClick={() => router.push("/bootcamp")}
                        />
                        <Avatar
                          alt="Agnes Walker"
                          src="./images/logo2.png"
                          // className="w-10 h-100"
                          style={{ width: "30px", height: "30px" }}
                        />
                        <Avatar
                          alt="Trevor Henderson"
                          src="./images/logo2.png"
                          // className="w-10 h-100"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </AvatarGroup>
                    </TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        </>
                      );
                    })}
                    {/* <TableCell className="text-center">
                      <button
                        type="button"
                        className="order-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md bg-green-500 hover:bg-green-600  text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 "
                        onClick={() =>
                          router.push("./batch/evaluation/detailTalent")
                        }
                      >
                        detail
                      </button>
                    </TableCell> */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Talent;
