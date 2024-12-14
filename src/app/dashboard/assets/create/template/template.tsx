"use client";
import { log } from "console";
import { useState } from "react";

export default function Template() {
  const [templateType, setTemplateType] = useState("");
  const [objectName, setObjectName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [keys, setKeys] = useState([{ keyName: "", keyType: "" }]);

  const handleAddKey = () => {
    setKeys([...keys, { keyName: "", keyType: "" }]);
  };

  type ObjectType = {
    keyName: string;
    keyType: string;
  };

  const handleFieldChange = (
    index: number,
    field: keyof ObjectType,
    value: string
  ) => {
    const updatedKeys = [...keys];
    updatedKeys[index][field] = value;
    setKeys(updatedKeys);
  };

  const handleRemoveKey = (index: number) => {
    const updatedKeys = keys.filter((_, i) => i !== index);
    setKeys(updatedKeys);
  };

  const handleSubmit = async () => {
    // Construct JSON payload
    const payload = {
      templateType,
      objectName,
      selectedIcon,
      keys,
    };
    console.log("Payload to be sent:", payload);

    try {
      const response = await fetch("https:/api/assets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      

      if (response.ok) {
        const data = await response.json();
        alert("Data submitted successfully: " + JSON.stringify(data));
      } else {
        const error = await response.json();
        alert("Error submitting data: " + JSON.stringify(error));
      }
    } catch (error) {
        console.error("Error message:", (error as Error).message);
      }
      
  };


  const materialIcons = [
    { label: "Laptop", icon: "laptop" },
    { label: "Cars", icon: "directions_car" },
    { label: "Mobile", icon: "smartphone" },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-[#444658] font-semibold mt-[10px] ml-[20px] ">
        Create New Asset Type
        <div className="border-b-2 mt-4 w-[100%]"></div>
      </div>
      <div className="text-[#444658] font-medium ml-[20px] mt-[30px]">
        Asset Type Details
        <div className="border-b-2 mt-2 w-[100%]"></div>
      </div>
      <div className="flex flex-col text-[#444658] font-semibold ml-[40px] mt-[30px] ">
        Template type *
        <div className="ml-[-4px] mt-[8px]">
          <input
            type="text"
            placeholder="Enter Template Type"
            className="w-[290px] px-4 py-2 border rounded-full text-gray-600"
            value={templateType}
            onChange={(e) => setTemplateType(e.target.value)}
          />
        </div>
      </div>
      <div className="p-4 rounded-2xl shadow-x bg-[#ffffff] w-[90%] md:w-[850px] ml-[20px] mt-[20px]">
        <div className="flex flex-col text-[#444658] font-semibold ml-[5px] mt-[10px] ">
          Object Name*
          <div className="ml-[-4px] mt-[8px]">
            <input
              type="text"
              placeholder="Enter Object Name"
              className="w-[290px] px-4 py-2 border rounded-full text-gray-600"
              value={objectName}
              onChange={(e) => setObjectName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col text-[#444658] font-semibold ml-[5px] mt-[20px] ">
          Object Icon*
          <div className="ml-[-4px] mt-[8px] relative">
            <select
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
              className="w-[290px] px-4 py-2 border rounded-full text-gray-600"
            >
              <option value="" disabled>
                Select Object Icon
              </option>
              {materialIcons.map((icon) => (
                <option key={icon.icon} value={icon.icon}>
                  {icon.label}
                </option>
              ))}
            </select>
          </div>
        </div>

     
        {keys.map((key, index) => (
  <div
    key={index}
    className="flex flex-col md:flex-row gap-4 md:gap-16 mt-[20px]"
  >
    <div className="flex flex-col text-[#444658] font-semibold ml-[5px]">
      Key Name*
      <div className="ml-[-4px] mt-[8px]">
        <input
          type="text"
          placeholder="Enter Key Name"
          value={key.keyName}
          onChange={(e) =>
            handleFieldChange(index, "keyName", e.target.value)
          }
          className="w-[290px] px-4 py-2 border rounded-full text-gray-600"
        />
      </div>
    </div>

    <div className="flex flex-col text-[#444658] font-semibold ml-[5px]">
      Key Type*
      <div className="ml-[-4px] mt-[8px]">
        <select
          value={key.keyType}
          onChange={(e) =>
            handleFieldChange(index, "keyType", e.target.value)
          }
          className="w-[290px] px-4 py-2 border rounded-full"
        >
          <option value="" disabled>
            Select Key Type
          </option>
          
          {key.keyName.toLowerCase().includes("image") || key.keyName.toLowerCase().includes("photo") || key.keyName.toLowerCase().includes("document") ? (
            <option value="Upload">Upload</option>
          ) : (
            <>
              <option value="String">String</option>
              <option value="Integer">Integer</option>
              <option value="Boolean">Boolean</option>
              <option value="Date">Date</option>
            </>
          )}
        </select>
      </div>
    </div>
  

            {index === keys.length - 1 ? (
              <button
                className="bg-[#444658] rounded-2xl h-[40px] ml-[-20px] mt-[30px] px-4 text-white"
                onClick={handleAddKey}
              >
                + Add Key
              </button>
            ) : (
              <button
                className="bg-[#E52C42] rounded-2xl h-[40px] w-[100px] px-4 text-white ml-[-20px] mt-[30px]"
                onClick={() => handleRemoveKey(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <div className="flex flex-row mt-[20px] gap-8">
          <button className="bg-[#E52C42] rounded-2xl text-white h-[40px] w-[120px]">
            Delete Object
          </button>
          <button className="bg-[#444658] rounded-2xl text-white h-[40px] w-[150px]">
            Add more objects
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-[30px] mt-[30px]">
        <button
          onClick={handleSubmit}
          className="bg-[#444658] rounded-2xl h-[40px] w-[80px] text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
