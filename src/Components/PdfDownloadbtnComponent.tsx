import React, { useState } from "react";
import Button from '@mui/material/Button';

const PdfDownloadbtnComponent = (
    {
        pdfUrl = 'files/vimalkumar-resume.pdf',
        fileName = 'resume.pdf',
        buttonText = 'Download PDF',
        downloadingText = 'Downloading...'
    }
) => {
    const [isDownloading, setIsDownloading] = useState<boolean>(false);

    const downloadPdf = async () => {
        if (isDownloading) return;
        
        setIsDownloading(true);
        
        try {
            // Create a temporary anchor element for download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = fileName;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
        } catch (error) {
            console.error('Download failed:', error);
            alert('Download failed. Please try again.');
        } finally {
            setTimeout(() => setIsDownloading(false), 1000); // Add slight delay for better UX
        }
    };

    return (
        <Button 
            variant="contained" 
            onClick={downloadPdf} 
            disabled={isDownloading} 
            size="large" 
            sx={{ 
                backgroundColor: "#c9f31d", 
                color: "#000", 
                margin: "20px 0px",
                '&:hover': {
                    backgroundColor: "#e5a832"
                }
            }}
            className="buttonsize_small"
        >
            {isDownloading ? downloadingText : buttonText}
        </Button>
    );
};

export default PdfDownloadbtnComponent;