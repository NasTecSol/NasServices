"use client"
import { useState } from "react";
import Link from "next/link";

export default function Assets() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

   
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const assets = [
    {
      id: 276,
      name: "Dell Latitude",
      type: "Laptop",
      model: "Latitude 120",
      insuranceStartDate: "Thu, Mar 30, 2023",
      insuranceEndDate: "Thu, Mar 30, 2025",
    },
    {
      id: 478,
      name: "Corolla Altis",
      type: "Vehicle",
      model: "Altis 2022",
      insuranceStartDate: "Thu, Aug 24, 2023",
      insuranceEndDate: "Thu, Mar 30, 2025",
    },
    {
      id: 521,
      name: "iPhone 15",
      type: "Mobile",
      model: "15 Pro Max",
    },
  ];

  return (
    <div className=" bg-white shadow-md rounded-lg mt-[1px] mr-[6px]  min-h-screen p-6">
      <div className="  w-[1350px]">
      
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Assets</h1>
          <div className="flex gap-4">
            <button className="px-4 text-[#444658] py-2 bg-[#ffffff] border rounded-[12px] flex items-center gap-2 shadow-md">
              Filters
            </button>
            <button
              onClick={togglePopup}
              className="px-4 py-2 bg-[#444658] text-white rounded-[12px] flex items-center gap-2"
            >
              + Add New Asset
            </button>
          
          </div>
        </div>

        
        {isPopupOpen && (
          <Popup onClose={togglePopup}>
            <h2 className="text-xl font-medium text-center mb-4">
              Select the type of asset you want to add
            </h2>
            <div className="flex justify-center mt-[30px] gap-4">
              <button className="px-3 py-1  bg-[#444658] text-white rounded-lg flex items-center gap-2">
                📱 Mobile
              </button>
              <Link href= "/dashboard/assets/created">
              <button className="px-3 py-1  bg-[#444658] text-white rounded-lg flex items-center gap-2">
                💻 Laptop
              </button>
              </Link>
              <button className="px-3 py-1  bg-[#444658] text-white rounded-lg flex items-center gap-2">
                🚗 Vehicle
              </button>
              <Link href="/dashboard/assets/create">
              <button className="px-3 py-1  bg-[#444658] text-white rounded-lg flex items-center gap-2">
                ➕ Add
              </button>
              </Link>
            </div>
          </Popup>
        )}

      
        <table className="w-full ">
          <thead>
            <tr className=" text-left border-t border-b text-gray-600">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Type</th>
              <th className="p-4">Model</th>
              <th className="p-4">Insurance Start Date</th>
              <th className="p-4">Insurance End Date</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset.id}
                className=" text-gray-700 hover:bg-gray-50"
              >
                <td className="p-4">{asset.id}</td>
                <td className="p-4">{asset.name}</td>
                <td className="p-4 flex items-center gap-2">
                  {getIcon(asset.type)} {asset.type}
                </td>
                <td className="p-4">{asset.model}</td>
                <td className="p-4">{asset.insuranceStartDate || "-"}</td>
                <td className="p-4">{asset.insuranceEndDate || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


function getIcon(type: string) {
  switch (type.toLowerCase()) {
    case "laptop":
      return "💻";
    case "vehicle":
      return "🚗";
    case "mobile":
      return "📱";
    default:
      return "📦";
  }
}
function Popup({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
        <div className="bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    );
  }
