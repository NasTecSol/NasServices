// context/FormContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, FormContextType, CompanyInfoData, CompanyAttachmentsData, CompanyOwnershipData } from '../types/formtypes';

import Cookies from 'js-cookie';

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({
        companyInfo: { name: '', companyOwnerName: '' , commercialLicenseNumber: '' , email: '', country: '', address: '' , phoneNumber:'', companyLogo: '' },
        documents: [],
        ownership: { userName: '', userType: '' , userID: '6731d7648555bd2e5eefd966' },
        employees: [],
        assets: []
    });

    const resetFormData = () => {
        setFormData(
            {
                companyInfo: { name: '', companyOwnerName: '' , commercialLicenseNumber: '' , email: '', country: '', address: '' , phoneNumber:'', companyLogo: '' },
                documents: [],
                ownership: { userName: '', userType: '' , userID: '6731d7648555bd2e5eefd966' },
                employees: [],
                assets: []
            }
        )
    }

    // const updateFormData = (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         [step]: Array.isArray(prev[step])
    //             ? [...(prev[step] as any[]), ...(data as any[])] // Merge arrays
    //             : { ...(prev[step] as object), ...data } // Merge objects
    //     }));
    // };

    const updateFormData = (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => {
        setFormData((prev) => {
            // Check if the current step in formData is an array
            if (Array.isArray(prev[step])) {
                const updatedArray = [
                    ...(prev[step] as any[]), // Existing array
                    ...(Array.isArray(data) ? data : [data]) // Append new data (ensure it's an array)
                ];
    
                // Optionally, you can filter duplicates based on unique properties like `id`
                const uniqueArray = Array.from(new Map(updatedArray.map((item: any) => [item.id, item])).values());
    
                return {
                    ...prev,
                    [step]: uniqueArray, // Update step with unique items
                };
            }
    
            // If not an array, treat as an object and merge properties
            return {
                ...prev,
                [step]: { ...(prev[step] as object), ...data }, // Merge objects
            };
        });
    };
    

    const submitForm = async () => {
        try {
            const token = Cookies.get('authToken');
            const response = await fetch('/api/companies', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log("Form submitted successfully:", result);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData, submitForm, resetFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) throw new Error("useFormContext must be used within a FormProvider");
    return context;
};
