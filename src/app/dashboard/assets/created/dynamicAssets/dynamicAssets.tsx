"use client";
import { useState, useEffect } from "react";

interface DynamicFormField {
  keyName: string;
  keyType: "String" | "Integer" | "Boolean" | "Date" | "Upload";
}

interface DynamicTemplate {
  templateType: string;
  objectName: string;
  selectedIcon: string;
  keys: DynamicFormField[];
}

export default function DynamicAssets() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [template, setTemplate] = useState<DynamicTemplate | null>(null);


  useEffect(() => {
    const fetchTemplateData = async () => {
        const response = {
            "templateType": "assets_vehicle",
            "objectName": "vehicle",
            "selectedIcon": "vehicle",
            "keys": [
              { "keyName": "Name*", "keyType": "String" },
              { "keyName": "Vehicle ID", "keyType": "String" },
              { "keyName": "Condition", "keyType": "String" },
              { "keyName": "Make", "keyType": "String" },
              { "keyName": "Model", "keyType": "String" },
              { "keyName": "Variant", "keyType": "String" },
              { "keyName": "License Plate", "keyType": "String" },
              { "keyName": "Color", "keyType": "String" },
              { "keyName": "Description", "keyType": "String" },
              { "keyName": "Fuel Type", "keyType": "String" },
              { "keyName": "Remarks", "keyType": "String" },
              { "keyName": "Engine Type", "keyType": "String" },
              { "keyName": "Mileage", "keyType": "Integer" },
              { "keyName": "Release Date", "keyType": "Date" },
              { "keyName": "Is Available", "keyType": "Boolean" },
              { "keyName": "Image", "keyType": "Upload" },
              { "keyName": "Color", "keyType": "Strinn" }
            ]
          };

      const normalizedKeys = response.keys.map((key) => ({
        keyName: key.keyName,
        keyType: key.keyType as "String" | "Integer" | "Boolean" | "Date" | "Upload",
      }));

      const normalizedResponse = {
        ...response,
        keys: normalizedKeys,
      };

      setTemplate(normalizedResponse);

      
      const initialFormData = normalizedResponse.keys.reduce(
        (acc, key) => ({ ...acc, [key.keyName]: key.keyType === "Boolean" ? false : "" }),
        {}
      );
      setFormData(initialFormData);
    };

    fetchTemplateData();
  }, []);

  const handleInputChange = (keyName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [keyName]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  if (!template) return <div>Loading...</div>;

 
  const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const fieldChunks = chunkArray(template.keys, 2); 

  return (
    <div>
      <h2 className="text-[#444658] font-semibold mt-[10px] ml-[20px]">
        {template.objectName}
      </h2>
      <div className="border-b-2 mt-4 w-[100%]"></div>
      <div className="text-[#444658] font-medium ml-[20px] mt-[30px]">
        Asset Details
        <div className="border-b-2 mt-2 w-[100%]"></div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-[20px] ml-[20px]">
        {fieldChunks.map((chunk, rowIndex) => (
          <div key={rowIndex} className="flex space-x-[64px] mb-[16px]">
            {chunk.map((field) => {
              let inputType = "text";
              if (field.keyType === "Integer") inputType = "number";
              if (field.keyType === "Boolean") inputType = "checkbox";
              if (field.keyType === "Date") inputType = "date";

              return (
                <div key={field.keyName} className="flex items-center w-[290px]">
                  <label className=" text-gray-700 w-[150px]">{field.keyName}  *</label>
                  {field.keyType === "Upload" ? (
                    <input
                      type="file"
                      className="w-[190px] px-4 py-2 border rounded-full text-gray-600"
                      onChange={(e) => handleInputChange(field.keyName, e.target.files?.[0]?.name || "")}
                    />
                  ) : field.keyType === "checkbox" ? (
                    <input
                      type={inputType}
                      checked={formData[field.keyName] || false}
                      className="w-[190px] px-4 py-2 border rounded-full text-gray-600"
                      onChange={(e) => handleInputChange(field.keyName, e.target.checked)}
                    />
                  ) : (
                    <input
                      type={inputType}
                      value={formData[field.keyName]}
                      className="w-[190px] px-4 py-2 border rounded-full text-gray-600"
                      onChange={(e) => handleInputChange(field.keyName, e.target.value)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#444658] rounded-2xl h-[40px] w-[120px] mb-[30px] mt-[10px] text-white "
          >
            Create Asset
          </button>
        </div>
      </form>
    </div>
  );
}
