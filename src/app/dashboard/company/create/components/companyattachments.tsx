"use client";
import { useState } from "react";
import { t } from "../../../../../utils/localization";
import { useLanguage } from "@/context/LanguageContext";
import { Box, Button, List, ListItem, IconButton, TextField, Typography } from '@mui/material';
import { useFormContext } from '../context/formcontext';
import { ChangeEvent,  useEffect } from 'react';

export default function CompanyAttachments() {
    const [currentLang, setCurrentLang] = useState("");
    const { language, setLanguage } = useLanguage();
    const { formData, updateFormData } = useFormContext();
    const [attachmentDetails, setAttachmentDetails] = useState({
        id: '', // Unique identifier
        name: '',
        type: '',
        expiry: '',
        attachmentUrl: '',
        reminderName: '',
        remnderdate: '',
    });

    // Log attachmentDetails after state updates
    useEffect(() => {
        console.log("Updated Attachment Details --->", attachmentDetails);
    }, [attachmentDetails]);

    // Handle file upload
    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        console.log("Handle FileUpload is called --->", file);
        if (file) {
            setAttachmentDetails((prev) => ({
                ...prev,
                id: Date.now().toString(), // Generate unique ID
                name: file.name,
                type: file.type,
                attachmentUrl: URL.createObjectURL(file), // Generate temporary URL for preview
            }));
        }
    };

    // Add attachment to documents
    const handleAddAttachment = () => {
        console.log("Form Data Before Adding --->", formData.documents);
        console.log("Attachment Detail Before Adding --->", attachmentDetails);

        const isDuplicate = formData.documents.some(
            (doc) =>
                doc.name === attachmentDetails.name &&
                doc.type === attachmentDetails.type &&
                doc.expiry === attachmentDetails.expiry &&
                doc.reminderName === attachmentDetails.reminderName &&
                doc.remnderdate === attachmentDetails.remnderdate
        );

        if (!isDuplicate && attachmentDetails.name && attachmentDetails.type) {
            updateFormData('documents', [
                ...formData.documents,
                { ...attachmentDetails },
            ]);

            console.log("Form Data After Adding --->", [
                ...formData.documents,
                { ...attachmentDetails },
            ]);

            // Reset fields after adding the attachment
            setAttachmentDetails({
                id: '',
                name: '',
                type: '',
                expiry: '',
                attachmentUrl: '',
                reminderName: '',
                remnderdate: '',
            });

            // Reset file input
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            if (fileInput) fileInput.value = '';
        }
    };

    // Remove attachment by index
    const handleRemoveAttachment = (index: number) => {
        const updatedAttachments = formData.documents.filter((_, i) => i !== index);
        updateFormData('documents', updatedAttachments);
    };

    return (
        <Box>
             <Box sx={{color:'#444658',fontSize:"21px",fontWeight:'600',marginLeft:'-390px',marginTop:'-110px',marginBottom:'90px'}}>
             {t("Registernewcompany", language as "en" |"ar")} 
            </Box>
          <Box sx={{ mt: 2, }}>
            <Box sx={{display:'flex',flexDirection:'row',marginLeft:'-380px',gap:'40px'}}>
            <TextField
                    label={t("Name", language as "en" |"ar")} 
                    fullWidth
                    value={attachmentDetails.name}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                    sx={{ mb: 2 ,width:'22%',  borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px'}, }}
                />
                   <TextField
                    label= {t("Type", language as "en" |"ar")} 
                    fullWidth
                    value={attachmentDetails.type}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            type: e.target.value,
                        }))
                    }
                    sx={{ mb: 2 ,width:'22%',  borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px'}, }}
                />
                <TextField
                    label= {t("ExpiryDate", language as "en" |"ar")} 
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={attachmentDetails.expiry}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            expiry: e.target.value,
                        }))
                    }
                    sx={{ mb: 2, width:'22%', borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px',}, }}
                />
                 </Box>
               
              <Box sx={{display:'flex',flexDirection:'row',marginLeft:'-380px',gap:'40px',marginTop:'15px'}}>
            {/* File Upload */}
            <Button variant="contained" component="label" sx={{ mb: 2,padding:'-5px',width:'22%',gap:'9px', height:'54px',color:'#444658',background:'#ffffff', borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px',}, }}>
           
            <img src="/company/file.png" alt="choose file" width={20} height={20} />
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.png,.jpg"
                />
                 
            </Button>
            
           
                <TextField
                    label= {t("ReminderName", language as "en" |"ar")} 
                    fullWidth
                    value={attachmentDetails.reminderName}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            reminderName: e.target.value,
                        }))
                    }
                    sx={{ mb: 2 ,width:'22%',  borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px'}, }}
                />
                <TextField
                    label="Reminder Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={attachmentDetails.remnderdate}
                    onChange={(e) =>
                        setAttachmentDetails((prev) => ({
                            ...prev,
                            remnderdate: e.target.value,
                        }))
                    }
                    sx={{ mb: 2 ,width:'22%',  borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px'},}}
                />
                </Box>
                <Button sx={{marginLeft:'-380px',marginTop:'20px', width:'35%',height:'50px',background:'#444658',color:'white',borderRadius: '50px','& .MuiOutlinedInput-root': { borderRadius: '50px'},}}
                    variant="contained"
                    color="primary"
                    
                    onClick={handleAddAttachment}
                    disabled={
                        !attachmentDetails.name ||
                        !attachmentDetails.type ||
                        !attachmentDetails.attachmentUrl ||
                        !attachmentDetails.expiry ||
                        !attachmentDetails.reminderName ||
                        !attachmentDetails.remnderdate
                    }
                >
                    Add Attachment
                </Button>
            </Box>

            {/* Display Attachments */}
            <List sx={{ mt: 4 }}>
                {formData.documents.map((attachment, index) => (
                    <ListItem
                        key={attachment.id || index} // Use unique ID or index
                        secondaryAction={
                            <IconButton sx={{color:'white',marginLeft:'-750px',background:'#E52C42', borderRadius:'17px',fontSize:'14px',height:'25px'}}
                               
                                aria-label="delete"
                                onClick={() => handleRemoveAttachment(index)}
                            > 
                                Remove
                            </IconButton>
                        }
                    >
                        <Box sx={{marginLeft:'-400px',marginTop:'-10px',border:'1px solid #B6B6B6',width:'40%', borderRadius:'16px',boxShadow:'0px 2px 4px 0px #00000040'}}>
                            <Typography variant="body2">
                                <strong>Name:</strong> {attachment.name}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Type:</strong> {attachment.type}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Expiry:</strong> {attachment.expiry}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Reminder:</strong> {attachment.reminderName} (
                                {attachment.remnderdate})
                            </Typography>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
