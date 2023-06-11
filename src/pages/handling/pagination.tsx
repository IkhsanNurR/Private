import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Pagination = (props: any) => {
  const { totalPages, currentPage, handlePageChange } = props;
  const renderPaginationButton = () => {
    const buttons = [];
    const maxButtons = 5;

    let startPage = currentPage - Math.floor(maxButtons / 2);
    startPage = Math.max(startPage, 1);
    let endPage = startPage + maxButtons - 1;
    endPage = Math.min(endPage, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <a
          key={i}
          aria-current="page"
          onClick={() => handlePageChange(i)}
          className={`relative z-10 inline-flex items-center ${
            currentPage === i
              ? "bg-green-500 text-white focus-visible:outline-indigo-500"
              : "bg-white"
          } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-indigo-400 `}
        >
          {i}
        </a>
      );
    }
    return buttons;
  };
  return (
    <>
      <div className="py-2 text-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            onClick={() =>
              handlePageChange(currentPage - 1 <= 1 ? 1 : currentPage - 1)
            }
            href="#"
            className="relative inline-flex items-center rounded-1-md px-2 py-2 text-green-500"
          >
            <KeyboardDoubleArrowLeftIcon />
          </a>
          {renderPaginationButton()}
          <a
            onClick={() =>
              handlePageChange(
                currentPage + 1 <= totalPages ? currentPage + 1 : currentPage
              )
            }
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-green-500"
            href="#"
          >
            <KeyboardDoubleArrowRightIcon />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
