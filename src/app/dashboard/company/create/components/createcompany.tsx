"use client"

// components/StepperForm.js
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography } from '@mui/material';

import CompanyInfo from './companyinfo';
import CompanyAttachments from './companyattachments';
import CompanyOwnership from './companyownership';
import { useFormContext } from '../context/formcontext';



const steps = ['Company Info', 'Attachments', 'Ownership'];

export default function CreateCompanySteper() {
  const [activeStep, setActiveStep] = useState(0);
  const [currentLang, setCurrentLang] = useState("en");
  const { language, setLanguage } = useLanguage();

  const { submitForm, resetFormData } = useFormContext();

  // Function to display the content for each step
  const getStepContent = (step : any) => {
      switch (step) {
          case 0:
              return <CompanyInfo />;
          case 1:
              return <CompanyAttachments />;
          case 2:
              return <CompanyOwnership />;
          default:
              return 'Unknown step';
      }
  };

  // Handle navigation to the next step
  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Call the submitForm function from the context
      const response = await submitForm();
     
      if (response == undefined ) {
        // If API response is okay, reset form data and stepper
        resetFormData();
        setActiveStep(0);
      }
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  // Handle navigation to the previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 5 }}>
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
            <Box sx={{ position:'fixed',display: 'flex', flexDirection: 'row', alignContent:'center',marginTop:'80px',gap:'10px'}}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ marginLeft:'140px',border:'1px solid',borderRadius:'12px',color:'#444658',background:'#ffffff'}}
               >
               {t("Back",language as "en" |"ar")} 
              </Button>
              
              <Button onClick={handleNext}
              sx={{ border:'1px solid',borderRadius:'12px',background:'#444658',color:'white',marginLeft:'-40px!importnart'}}>
          
          {activeStep === steps.length - 1 ? t("Finish",language as "en"|"ar") : t("Next", language as "en"|"ar")}

              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
