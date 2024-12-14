"use client";
import { useState } from "react";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
import { Button, TextField, Box } from "@mui/material";
import { useFormContext } from "../context/formcontext";


export default function CompanyOwnership() {
  const { formData, updateFormData } = useFormContext();
  const [currentLang, setCurrentLang] = useState("");
  const { language, setLanguage } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData("ownership", { [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Box
        sx={{
          color: "#444658",
          fontSize: "21px",
          fontWeight: "600",
          marginLeft: "-390px",
          marginTop: "-110px",
          marginBottom: "90px",
        }}
      >
        {t("Registernewcompany", language as "en" |"ar")} 
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "-380px",
          gap: "40px",
        }}
      >
        <TextField
          sx={{
            width: "22%",
            borderRadius: "50px",
            "& .MuiOutlinedInput-root": { borderRadius: "50px" },
          }}
          fullWidth
          label={t("Name", language as "en" |"ar")} 
          name="userName"
          variant="outlined"
          margin="normal"
          value={formData.ownership.userName}
          onChange={handleChange}
        />
        {/* <TextField
                fullWidth
                label="Email"
                name="userName"
                variant="outlined"
                margin="normal"
                value={formData.ownership.email}
                onChange={handleChange}
                sx={{width:'22%',borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px'},}}
            /> */}
        {/* <TextField
                fullWidth
                label="phone No"
                name="userName"
                variant="outlined"
                margin="normal"
                value={formData.ownership.phoneNo}
                onChange={handleChange}
                sx={{width:'22%',borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px'},}}
            /> */}
      </Box>
      <TextField
        fullWidth
        label={t("OwnershipType", language as "en" |"ar")}
        name="userType"
        variant="outlined"
        margin="normal"
        value={formData.ownership.userType}
        onChange={handleChange}
        sx={{
          marginLeft: "-380px",
          marginTop: "20px",
          width: "35%",
          orderRadius: "50px",
          "& .MuiOutlinedInput-root": { borderRadius: "50px" },
        }}
      />
    </Box>
  );
}
