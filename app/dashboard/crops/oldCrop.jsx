'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import news3 from '/public/news3.jpg'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table"

import { TbArrowsDownUp } from "react-icons/tb";
import { ScrollBar } from '@/components/ui/scroll-area'
import { ScrollArea } from '@radix-ui/react-scroll-area'

import { useTransition } from "react";
import { saveCrop } from '@/actions/saveCrop'
import { fetchCrops } from '@/actions/fetchCrops'


const data = [
  {
    id: 1,
    picture: news3,
    name: "Rice crop",
    species: "Zea mays",
    land: "Clay land",
    seeds: "",
    startDate: "0000-00-00",
    endDate: "0000-00-00",
    notes: "",
    creationDate: "2023-02-16",
    status: "Inactive",
  },
  {
    id: 2,
    picture: news3,
    name: "Corn crop",
    species: "Zea mays",
    land: "Clay land",
    seeds: "22 bags",
    startDate: "0000-00-00",
    endDate: "0000-00-00",
    notes: "Three months",
    creationDate: "2023-02-16",
    status: "Active",
  },
]

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
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "land",
    header: "Land",
  },
  {
    accessorKey: "seeds",
    header: "Seeds",
  },
  {
    accessorKey: "startDate",
    header: "Start date",
  },
  {
    accessorKey: "endDate",
    header: "End date",
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
      <span className={`px-2 py-1 rounded-full text-sm ${row.original.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      return (
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
      )
    },
  },
]

const OldCrop = () => {
  const [sorting, setSorting] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  // Fetch crop data from the server action
  useEffect(() => {
    const getCrops = async () => {
      try {
        const data = await fetchCrops();
        setCrops(data);
      } catch (error) {
        console.error("Failed to fetch crops", error);
      } finally {
        setLoading(false);
      }
    };

    getCrops();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Collect form data

    startTransition(async () => {
      const result = await saveCrop(formData);

      if (result.success) {
        alert("Crop saved successfully!");
        e.target.reset(); // Reset form
        toggleModal(); // Close modal
      } else {
        alert(`Error saving crop: ${result.error}`);
      }
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full p-4 ">
      <header className="flex justify-between items-center bg-white shadow p-4 mb-4">
        <h2 className="text-xl text-center font-bold">Crops</h2>
      </header>

      {/* Table Container with overflow-x-scroll */}
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
            <Button variant="destructive">Delete all crops</Button>
            <Button variant="outline">Import crops</Button>
            <Button onClick={toggleModal}>New crop</Button>
          </div>
         
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 w-full min-h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="modal-dialog w-full h-full flex justify-center items-center">
              <div className="bg-white rounded-md p-4 w-11/12 max-w-lg h-[90%] overflow-y-auto shadow-lg">
                <form id="crop_form" className="h-full" onSubmit={handleFormSubmit}>
                  <div className="modal-content h-full flex flex-col">
                    <div className="modal-header flex justify-between items-center mb-4">
                      <h5 className="modal-title text-xl font-semibold">Add new crop</h5>
                      <button
                        type="button"
                        onClick={toggleModal}
                        className="text-2xl font-bold"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="modal-body flex-1 overflow-y-auto">
                      {/* Input fields */}
                      <div className="form-group mb-4">
                        <label>Name*</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>

                      <div className="form-group mb-4">
                        <label>Species*</label>
                        <select
                          name="species"
                          id="species"
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                          required
                        >
                          <option value="">Choose a species</option>
                          <option value="maize">Maize</option>
                          <option value="legume">Legume</option>
                          {/* Dynamically populate species options */}
                        </select>
                      </div>

                      <div className="form-group mb-4">
                        <label>Land*</label>
                        <select
                          name="land"
                          id="land"
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                          required
                        >
                          <option value="">Choose a land</option>
                          <option value="2">Sandy land</option>
                          <option value="1">Clay land</option>
                        </select>
                      </div>

                      <div className="form-group mb-4">
                        <label>Seeds (quantity)</label>
                        <input
                          type="number"
                          name="seed"
                          id="seed"
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="form-group mb-4">
                        <label>Start date*</label>
                        <input
                          type="date"
                          name="date_start"
                          id="date_start"
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>

                      <div className="form-group mb-4">
                        <label>End date*</label>
                        <input
                          type="date"
                          name="date_end"
                          id="date_end"
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>

                      <div className="form-group mb-4">
                        <label>Picture</label>
                        <input
                          type="text" // Replace with file handling logic if needed
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                          name="photo"
                          id="photo"
                        />
                      </div>

                      <div className="form-group mb-4">
                        <label>Notes</label>
                        <textarea
                          name="notes"
                          id="notes"
                          className="form-control w-full p-2 border border-gray-300 rounded-md"
                          rows="4"
                          placeholder="Notes"
                        ></textarea>
                      </div>
                    </div>
                    <div className="modal-footer flex justify-between items-center mt-4">
                      <button
                        type="button"
                        onClick={toggleModal}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                        disabled={isPending}
                      >
                        {isPending ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}


        {/* Table Controls */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select className="border rounded px-2 py-1" >
              {[10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span>entries</span>
          </div>
          <div className="max-w-sm flex items-center">
            <Input
              placeholder="Search crops..."
            />
          </div>
        </div>


        {/* Table */}
        <div className="container mx-auto p-4">
          <section className="relative overflow-x-auto rounded-md p-2">
            <ScrollArea className="w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1280px] max-w-full rounded-md border border-black p-4">
              <Table className="w-full table-auto font-light">
                <TableHeader>
                  <TableRow>
                    {table.getHeaderGroups().map((headerGroup) =>
                      headerGroup.headers.map((header) => (
                        <TableHead key={header.id} className="border border-gray-200">
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                onClick: header.column.getToggleSortingHandler(),
                                className: "flex text-sm items-center gap-1 cursor-pointer ",
                              }}
                            >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              {{
                                asc: <TbArrowsDownUp />,
                                desc: <TbArrowsDownUp className="rotate-180" />,
                              }[header.column.getIsSorted()] ?? null}
                            </div>
                          )}
                        </TableHead>
                      ))
                    )}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {crops.length ? (
                    crops.map((crop) => (
                      <TableRow key={crop._id}>
                        <TableCell className="p-2 border border-gray-200">{crop.name}</TableCell>
                        <TableCell className="p-2 border border-gray-200">{crop.type}</TableCell>
                        <TableCell className="p-2 border border-gray-200">{crop.quantity}</TableCell>
                        <TableCell className="p-2 border border-gray-200">
                          {new Date(crop.plantedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="p-2 border border-gray-200">
                          {new Date(crop.harvestedDate).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={11} className="h-24 text-center text-gray-500 font-semibold">
                        No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{" "}
            {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, table.getFilteredRowModel().rows.length)} of{" "}
            {table.getFilteredRowModel().rows.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OldCrop
