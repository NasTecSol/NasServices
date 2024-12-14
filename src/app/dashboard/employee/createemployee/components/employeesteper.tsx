"use client";

// components/StepperForm.js
import { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
import UserInfo from "./userinfo";
import PersonalInfo from "./personalinfo";
import ProfessionalInfo from "./professionalinfo";
import SalaryPackage from "./salarypackage";
import EmployeeAttachments from "./attachments";

// import { useFormContext } from '../context/formcontext';

const steps = [
  "User Info",
  "Personal Info",
  "Professional Info",
  "Salary Package",
  "Attachments",
];

export default function EmployeeSteper() {
  const [currentLang, setCurrentLang] = useState("en");
  const { language, setLanguage } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  // const { submitForm, resetFormData } = useFormContext();

  // Function to display the content for each step
  const getStepContent = (step: any) => {
    switch (step) {
      case 0:
        return <UserInfo />;
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ProfessionalInfo />;
      case 3:
        return <SalaryPackage />;
      case 4:
        return <EmployeeAttachments />;
      default:
        return "Unknown step";
    }
  };

  // Handle navigation to the next step
  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Call the submitForm function from the context
      //const response = await submitForm();
      //   if (response == undefined ) {
      //     If API response is okay, reset form data and stepper
      //     resetFormData();
      //     setActiveStep(0);
      //   }
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  // Handle navigation to the previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box
      sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 5, color: "#444658" }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 4, mb: 2 }}>
        {activeStep === steps.length ? (
          <Typography variant="h6" align="center">
            All steps completed - you're finished
          </Typography>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box
              sx={{
                position: "fixed",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                marginTop: "70px",
                gap: "10px",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  marginLeft: "140px",
                  border: "1px solid",
                  borderRadius: "12px",
                  color: "#444658",
                  background: "#ffffff",
                }}
              >
                {t("Back",language as "en" |"ar")} 
              </Button>

              <Button
                onClick={handleNext}
                sx={{
                  border: "1px solid",
                  borderRadius: "12px",
                  background: "#444658",
                  color: "white",
                  marginLeft: "-40px!importnart",
                }}
              >
                 {activeStep === steps.length - 1 ? t("Finish",language as "en"|"ar") : t("Next", language as "en"|"ar")}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
