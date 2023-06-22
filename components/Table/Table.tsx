"use client";

import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { BiEdit, BiTrash } from "react-icons/bi";
import axios from "axios";
import { customStyles } from "@/utils/tablestyles";
import Link from "next/link";

const columns = [
  {
    name: "Name",
    selector: (row: UserData) => row.username,
    sortable: true,
  },
  {
    name: "Role",
    selector: (row: UserData) => row.role,
    sortable: true,
    grow: 0.3,
  },
  {
    name: "Action",
    cell: (row: UserData) => (
      <>
        {row?.role === "admin" ? (
          <span></span>
        ) : (
          <Link
            href={`/admin/user/update?id=${row?._id}`}
            className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
          >
            <BiEdit className="text-xs md:text-sm" />{" "}
            <span className="text-xs md:text-sm">Edit</span>
          </Link>
        )}
      </>
    ),
    grow: 0.3,
  },
];

function Table() {
  const [apiData, setApiData] = useState<ApiUsersData>({ users: [], total: 0 });
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getUserList = (page: number) => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user?page=${page}`)
      .then((res) => {
        setApiData(res?.data);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
        setApiData({ users: [], total: 0 });
      })
      .finally(() => setLoading(false));
  };

  const handlePageChange = (page: number) => {
    getUserList(page);
    setCurrentPage(page);
  };

  useEffect(() => {
    getUserList(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 lg:w-2/5">
        <DataTable
          columns={columns}
          data={apiData.users}
          progressPending={loading}
          pagination
          paginationServer
          paginationDefaultPage={currentPage}
          onChangePage={handlePageChange}
          paginationPerPage={6}
          paginationTotalRows={apiData.total}
          paginationRowsPerPageOptions={[6]}
          dense
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

export default Table;
