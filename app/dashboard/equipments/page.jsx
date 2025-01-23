'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import news3 from '/public/news3.jpg';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { TbArrowsDownUp } from "react-icons/tb";

const data = [
  {
    id: 1,
    picture: news3,
    name: "Warehouse",
    category: "Small warehouse",
    notes: "Built in 2010, renovated 2024",
    creationDate: "2023-02-16",
    status: "Inactive",
  },
  {
    id: 2,
    picture: news3,
    name: "Warehouse2",
    category: "Large warehouse",
    notes: "Built in 2024",
    creationDate: "2023-05-24",
    status: "Active",
  },

];

const columns = [
  {
    accessorKey: "picture",
    header: "Picture",
    cell: ({ row }) => (
      <Image
        src={row.original.picture}
        alt={row.original.name}
        width={40}
        height={40}
        className="rounded-full"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "warehouse",
    header: "Warehouse",
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
  {
    accessorKey: "creationDate",
    header: "Creation date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-full text-sm ${row.original.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const page = () => {
  const [sorting, setSorting] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: { sorting, globalFilter },
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center bg-white shadow p-4 mb-4">
        <h2 className="text-xl text-center font-bold">Equipments</h2>
      </header>

      {/* Table Container */}
      <section id="table-container" className="space-y-4 overflow-x-scroll">
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-2 mb-2">
            <Button variant="outline">Copy</Button>
            <Button variant="outline">CSV</Button>
            <Button variant="outline">Excel</Button>
            <Button variant="outline">PDF</Button>
            <Button variant="outline">Print</Button>
          </div>
          <div className="flex gap-2 mb-2">
            <Button variant="destructive">Delete all Equipments</Button>
            <Button variant="outline">Import Equipments</Button>
            <Button onClick={toggleModal}>New equipment</Button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-md p-4 w-11/12 max-w-lg shadow-lg">
              <form>
                <h5 className="text-xl font-semibold mb-4">Add new Equipment</h5>
                <div className="mb-4">
                  <label>Name*</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label>Quantity*</label>
                  <input
                    type="number"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-4">
                  <label>Warehouse*</label>
                  <input
                    type="number"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-4">
                  <label>Picture</label>
                  <input
                    type="file"
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-4">
                  <label>Notes</label>
                  <textarea
                    className="w-full border rounded p-2"
                    rows="3"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <Button onClick={toggleModal} variant="outline">
                    Close
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Table Controls */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select
              onChange={(e) =>
                table.setPageSize(Number(e.target.value))
              }
              className="border rounded px-2 py-1"
            >
              {[10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span>entries</span>
          </div>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search crops..."
              value={(table.getColumn("name")?.getFilterValue() ?? "")}
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() && (
                      <TbArrowsDownUp
                        className="inline ml-2 cursor-pointer"
                        onClick={() => header.column.toggleSorting()}
                      />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="overflow-y-scroll max-h-[50vh]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default page;
