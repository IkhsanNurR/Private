import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dataDummy from "../../../data";
import columns from "../columns";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ReadyModal, DefaultModal } from "../dialog/index";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Pagination from "../../../handling/pagination";

const ApplyTable = (props: any) => {
  const status = props.status;
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData]: any = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(4);

  const totalPage = Math.ceil(dataDummy?.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = dataDummy?.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleClickOpen = (data: any) => {
    setSelectedData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    switch (status) {
      case "apply":
        const apply: any = dataDummy.filter((dt) => dt.status === "apply");
        setData(apply);
        break;
      case "ready":
        const ready: any = dataDummy.filter((dt) => dt.status === "ready");
        setData(ready);
        break;
      case "placement":
        const placement: any = dataDummy.filter(
          (dt) => dt.status === "placement"
        );
        setData(placement);
        break;
      default:
        break;
    }
  }, [status]);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {(columns || []).map((col) => (
                <TableCell className="bg-gray-200 text-center">
                  {col.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(data || []).map((dt: any, index: any) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={dt.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="text-center">{dt.nama}</TableCell>
                <TableCell className="text-center">{dt.sekolah}</TableCell>
                <TableCell className="text-center">{dt.lulus}</TableCell>
                <TableCell className="text-center">{dt.hp}</TableCell>
                <TableCell className="text-center">{dt.keahlian}</TableCell>
                <TableCell className="text-center">{dt.status}</TableCell>
                <TableCell className="text-center">
                  <Button
                    onClick={() => handleClickOpen(dt)}
                    className="text-black"
                  >
                    <MoreVertIcon />
                  </Button>
                  <Dialog
                    open={(Boolean(selectedData), open)}
                    // open={open}
                    // onClose={(() => setDataStatus(null), handleClose)}
                    // onClose={() => setSelectedData(null)}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle
                      id="alert-dialog-title"
                      className="border-b-2 mb-4"
                    >
                      {"Switch Status"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        {selectedData &&
                          (selectedData.status === "ready" ? (
                            <ReadyModal data={selectedData} />
                          ) : (
                            <DefaultModal data={selectedData} />
                          ))}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Paper>
  );
};

export default ApplyTable;
