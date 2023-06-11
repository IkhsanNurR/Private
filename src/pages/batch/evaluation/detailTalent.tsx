import React, { SyntheticEvent, useState } from "react";
import Image from "next/image";
import img from "../../../../public/images/logo3.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useForm } from "react-hook-form";

const DetailTalent = () => {
  type FormValues = {
    fundamental: number;
    oop: number;
    database: number;
    communication: number;
    teamwork: number;
    selfLearning: number;
    gerak: number;
    pembawaan: number;
    nada: number;
  };
  const [expanded, setExpanded]: any = useState([]);
  const [score, SetScore] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();

  const handleRegistration = async (data: any) => {
    try {
      const values = Object.values(data);
      const jumlah: any = values.reduce((acc: any, item: any) => {
        return acc + parseInt(item);
      }, 0);
      const Hasilscore: any = Math.ceil((jumlah / 36) * 100);
      SetScore(Hasilscore);
    } catch (error: any) {}
  };
  const onChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const { id, value }: any = target;
    setValue(id, value);

    const values = getValues();
    const totalScore = Object.values(values).reduce((acc, item): any => {
      const parsedValue = parseInt(item.toString());
      if (!isNaN(parsedValue)) {
        return acc + parsedValue;
      } else {
        return acc;
      }
    }, 0);
    const newScore = Math.ceil((totalScore / 36) * 100);
    SetScore(newScore);
  };

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(
      isExpanded
        ? [...expanded, panel]
        : expanded.filter((item: any) => item !== panel)
    );
  };

  return (
    <div className="mt-20">
      <div className="bg-red-400 w-full pl-10 rounded-lg">
        <div className="pt-14 pb-14 grid grid-cols-4 gap-4">
          <Image
            src={img}
            className="rounded-full h-24 w-24 border-2 border-white bg-white shadow-sm p-2"
            alt="profile picture"
          />
          <div className="-ml-10">
            <h1 className="text-xl font-bold">Chitia</h1>
            <h3>NodeJs, Batch13, Running</h3>
            <h3>march 18, 2020 until june 18, 2020</h3>
          </div>
          <div className="text-base mt-1">
            <h3>Universitas Indonesia</h3>
            <h3>Jurusan Informatika</h3>
            <h3>IPK 3.99</h3>
          </div>
          <div className="text-base">
            <h3 className="text-3xl font-semibold mt-5">Score : {score}</h3>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <Accordion
            expanded={expanded.includes("panel1")}
            onChange={handleChange("panel1")}
            key="panel1"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                border: expanded !== "panel1" ? "1px solid #c2c2c2" : "none",
                maxHeight: "10px",
                // marginTop: "1px",
              }}
              className="shadow-b shadow-sm shadow-gray-400"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0 }}
                className="font-semibold text-lg"
              >
                Technical
              </Typography>
              <Typography
                sx={{ color: "text.secondary", marginLeft: "auto" }}
                className="mr-4"
              >
                (Scale 1-4)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="grid grid-cols-2" id="panel1bh-content">
                <label className="text-base mt-2">Fundamental</label>
                <input
                  type="number"
                  className="placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  min="1"
                  max="4"
                  id="fundamental"
                  placeholder="0"
                  // name="fundamental"
                  {...register("fundamental")}
                  onChange={onChange}
                />
              </div>
              <div className="grid grid-cols-2 mt-2">
                <label htmlFor="oop" className="mt-2">
                  Object Oriented Programming (OOP)
                </label>
                <input
                  type="number"
                  className="placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  id="oop"
                  min="1"
                  max="4"
                  placeholder="0"
                  // name="oop"
                  {...register("oop")}
                  onChange={onChange}
                />
              </div>
              <div className="grid grid-cols-2 mt-2">
                <label htmlFor="database" className="mt-2">
                  Database
                </label>
                <input
                  type="number"
                  className=" placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  id="database"
                  min="1"
                  max="4"
                  placeholder="0"
                  // name="database"
                  {...register("database")}
                  onChange={onChange}
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded.includes("panel2")}
            onChange={handleChange("panel2")}
            key="panel2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{
                border: expanded !== "panel1" ? "1px solid #c2c2c2" : "none",
                maxHeight: "10px",
              }}
              className="shadow-b shadow-sm shadow-gray-400"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0 }}
                className="font-semibold text-lg"
              >
                Softskill
              </Typography>
              <Typography
                sx={{ color: "text.secondary", marginLeft: "auto" }}
                className="mr-4"
              >
                (Scale 1-4)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="grid grid-cols-2" id="panel1bh-content">
                <label className="text-base mt-2">Communication</label>
                <input
                  type="number"
                  className="placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  min="1"
                  max="4"
                  id="communication"
                  placeholder="0"
                  // name="communication"
                  {...register("communication")}
                  onChange={onChange}
                />
              </div>
              <div className="grid grid-cols-2 mt-2">
                <label htmlFor="teamwork" className="mt-2">
                  Teamwork
                </label>
                <input
                  type="number"
                  className="placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  id="teamwork"
                  min="1"
                  max="4"
                  placeholder="0"
                  // name="teamwork"
                  {...register("teamwork")}
                  onChange={onChange}
                />
              </div>
              <div className="grid grid-cols-2 mt-2">
                <label htmlFor="selfLearning" className="mt-2">
                  Self-Learning
                </label>
                <input
                  type="number"
                  className=" placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  id="selfLearning"
                  min="1"
                  max="4"
                  placeholder="0"
                  // name="selfLearning"
                  {...register("selfLearning")}
                  onChange={onChange}
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded.includes("panel3")}
            onChange={handleChange("panel3")}
            key="panel3"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              sx={{
                border: expanded !== "panel1" ? "1px solid #c2c2c2" : "none",
                maxHeight: "10px",
              }}
              className="shadow-b shadow-sm shadow-gray-400"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0 }}
                className="font-semibold text-lg"
              >
                Presentation
              </Typography>
              <Typography
                sx={{ color: "text.secondary", marginLeft: "auto" }}
                className="mr-4"
              >
                (Scale 1-4)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="grid grid-cols-2" id="panel1bh-content">
                <label className="text-base mt-2">Gerak</label>
                <input
                  type="number"
                  className="placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  min="1"
                  max="4"
                  id="gerak"
                  placeholder="0"
                  // name="gerak"
                  {...register("gerak")}
                  onChange={onChange}
                />
              </div>
              <div className="grid grid-cols-2 mt-2">
                <label htmlFor="pembawaan" className="mt-2">
                  Pembawaan
                </label>
                <input
                  type="number"
                  className="placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  id="pembawaan"
                  min="1"
                  max="4"
                  placeholder="0"
                  // name="pembawaan"
                  {...register("pembawaan")}
                  onChange={onChange}
                />
              </div>
              <div className="grid grid-cols-2 mt-2">
                <label htmlFor="nada" className="mt-2">
                  Nada
                </label>
                <input
                  type="number"
                  className=" placeholder-text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-14"
                  id="nada"
                  min="1"
                  max="4"
                  placeholder="0"
                  // name="nada"
                  {...register("nada")}
                  onChange={onChange}
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <div className="flex-row space-x-4 mt-4 ">
            <div className="flex justify-between">
              <button className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailTalent;
