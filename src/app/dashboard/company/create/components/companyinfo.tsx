// components/companyinfo.tsx
"use client";
import { useState } from "react";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
import { Button, Box, TextField, Typography, colors } from '@mui/material';
import { useFormContext } from '../context/formcontext';

export default function CompanyInfo() {
    const [currentLang, setCurrentLang] = useState("");
    const { language, setLanguage } = useLanguage();
    const { formData, updateFormData } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData('companyInfo', { [e.target.name]: e.target.value });
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            updateFormData('companyInfo', { companyLogo: file.name }); // Save file name or data
        }
    };

    return (
        <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Box sx={{color:'#444658',fontSize:"21px",fontWeight:'600',marginLeft:'-410px',marginTop:'-150px',marginBottom:'90px'}}>
            {t("Registernewcompany", language as "en" |"ar")} 
        
            </Box>
            
            <TextField            
                fullWidth
                label = {t("CompanyName", language as "en" |"ar")}
                name="name"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.name}
                onChange={handleChange}
                placeholder="Enter company name"
                sx={{width:'40%', marginLeft:'-400px',color:'#444658',  borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px',},}}
            />
           <TextField
                fullWidth
                label= {t("CommercialRegistrationNo*", language as "en" |"ar")}
                name="commercialLicenseNumber"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.commercialLicenseNumber}
                onChange={handleChange}
                placeholder="Enter company registeration Number"
                sx={{ width: '40%',marginLeft:'40px', borderRadius: '50px', '& .MuiOutlinedInput-root': { borderRadius: '50px'},}}/>
              <Box
               sx={{display: 'flex',alignItems: 'center',gap: 4,}}>
    <TextField
        fullWidth
        label={t("Country/City", language as "en" |"ar")}
        name="country"
        variant="outlined"
        margin="normal"
        value={formData.companyInfo.country}
        onChange={handleChange}
        placeholder="Enter Country/City Name"
        sx={{
           marginLeft:'-400px', width: '40%', borderRadius: '50px', '& .MuiOutlinedInput-root': { borderRadius: '50px',},
        }}
    />
    <TextField
        fullWidth
        label={t("CompanyAddress", language as "en" |"ar")}
        name="address"
        variant="outlined"
        margin="normal"
        value={formData.companyInfo.address}
        onChange={handleChange}
        placeholder="Enter company address"
        sx={{
            marginLeft:'10px',width: '40%', borderRadius: '50px', '& .MuiOutlinedInput-root': { borderRadius: '50px',},
        }}
    />
    <TextField
        fullWidth
        label={t("CompanyPhoneNumber", language as "en" |"ar")}
        name="phoneNumber"
        variant="outlined"
        margin="normal"
        value={formData.companyInfo.phoneNumber}
        onChange={handleChange}
        placeholder="Enter company phone number"
        sx={{ width: '40%', borderRadius: '50px', '& .MuiOutlinedInput-root': { borderRadius: '50px'},}}/>
</Box>
<TextField
                fullWidth
                label={t("CompanyRegistrationNumber", language as "en" |"ar")}
                name="commercialLicenseNumber"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.commercialLicenseNumber}
                onChange={handleChange}
                placeholder="Enter company registeration Number"
                sx={{ width: '40%',marginLeft:'-400px', borderRadius: '50px', '& .MuiOutlinedInput-root': { borderRadius: '50px'},}}/>
            <TextField
                fullWidth
                label={t("CompanyEmail", language as "en" |"ar")}
                name="email"
                variant="outlined"
                margin="normal"
                value={formData.companyInfo.email}
                onChange={handleChange}
                placeholder="Enter company email"
                sx={{ width: '40%', borderRadius: '50px',marginLeft:'40px', '& .MuiOutlinedInput-root': { borderRadius: '50px'},}}/>

            <Box mt={2}>
                <Typography variant="body1" gutterBottom sx={{marginLeft:'-390px',color:'#444658'}}>
                    
                    Add Company Logo
                </Typography>
                <Box
    sx={{
        display: 'flex',
        alignItems: 'center', // Vertically align items
      
    }}
>
<Button
    variant="contained"
    component="label"
    sx={{
        display: 'flex',
        background: '#ffffff',
        color: '#444658',
        width: '55%',
        borderRadius: '50px',
        marginLeft: '-400px',
        gap: 1,
    }}
>
    <img src="/company/file.png" alt="choose file" width={20} height={20} />
    Choose File
    <input
        type="file"
        hidden
        onChange={handleFileUpload}
        accept=".pdf,.doc,.docx,.png,.jpg" // Accept specific file types
    />
    {formData.companyInfo.companyLogo ? (
        <Typography
            variant="body2"
            sx={{
                marginLeft: 2,
                color: '#444658',
            }}
        >
            Uploaded: {formData.companyInfo.companyLogo}
        </Typography>
    ) : (
        <Typography
            variant="body2"
            sx={{
                marginLeft: 2,
                color: '#888',
            }}
        >
            | No file chosen
        </Typography>
    )}
</Button>

    
</Box>

               
            </Box>
        </Box>
    );
}
