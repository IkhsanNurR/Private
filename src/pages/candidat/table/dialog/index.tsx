export const DefaultModal = ({ data }: any) => {
  return (
    <>
      <h2 className=" text-black font-semibold mb-4">Kandidat : {data.nama}</h2>
      <label className="text-black">
        Status :
        <span>
          <select
            name=""
            id=""
            className="border-solid-gray-400 border-black border-2 p-1 md:text-md"
          >
            <option value={data.id}>{data.status}</option>
            <option value="ready">Ready</option>
            <option value="contract">Contract</option>
            {/* <option value="">ready</option> */}
          </select>
        </span>
      </label>
    </>
  );
};

export const ReadyModal = ({ data }: any) => {
  return (
    <>
      <h2 className=" text-black font-semibold mb-4">Kandidat : {data.nama}</h2>
      <label className="text-black">
        Score Filtering Test :
        <span>
          <input
            type="number"
            className=" border-black border-2 p-1 md:text-md mb-2"
            min={1}
            max={100}
          />
        </span>
      </label>
      <div>
        <label className="text-black">
          Status :
          <span>
            <select
              name=""
              id=""
              className="border-solid-gray-400 border-black border-2 p-1 md:text-md"
            >
              <option value={data.id}>{data.status}</option>
              <option value="ready">Ready</option>
              <option value="contract">Contract</option>
              {/* <option value="">ready</option> */}
            </select>
          </span>
        </label>
      </div>
      <h1 className="text-black mt-2">Reviews</h1>
      <textarea
        name="review"
        id="review"
        className=" border-black border-2 p-1 md:text-md"
        cols={30}
        rows={10}
      ></textarea>
    </>
  );
};
