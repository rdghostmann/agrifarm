import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Farm Management Website</h1>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-black">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Picture</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Species</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Land</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Seeds</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Start Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">End Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Creation Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Example Row --> */}
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <img src="https://via.placeholder.com/50" alt="Picture" className="w-10 h-10 rounded" />
                </td>
                <td className="border border-gray-300 px-4 py-2">Sample Name</td>
                <td className="border border-gray-300 px-4 py-2">Sample Species</td>
                <td className="border border-gray-300 px-4 py-2">Sample Land</td>
                <td className="border border-gray-300 px-4 py-2">Sample Seeds</td>
                <td className="border border-gray-300 px-4 py-2">2025-01-01</td>
                <td className="border border-gray-300 px-4 py-2">2025-12-31</td>
                <td className="border border-gray-300 px-4 py-2">Sample Notes</td>
                <td className="border border-gray-300 px-4 py-2">2025-01-07</td>
                <td className="border border-gray-300 px-4 py-2">Active</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
              {/* <!-- Add more rows as needed --> */}
            </tbody>
          </table>
        </div>
      </div>
    </>

  );
}
