"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = Number(searchParams.get("page")) || 1;

  const handlePrev = () => {
    if (page !== 1) {
      router.push(`${pathname}?page=${page - 1}`);
    }
  };
  const handleNext = () => {
    router.push(`${pathname}?page=${page + 1}`);
  };

  return (
    <>
      <div className="flex mx-3 my-5 gap-2 ">
        {page !== 1 && (
          <button
            onClick={handlePrev}
            className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
          >
            Prev
          </button>
        )}

        {page !== totalPages && (
          <button
            onClick={handleNext}
            className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
export default Pagination;
