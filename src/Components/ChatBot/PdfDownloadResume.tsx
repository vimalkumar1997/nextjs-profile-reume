import React, { useState, CSSProperties } from "react";
import { Download } from 'lucide-react';

interface StylesType {
  [key: string]: CSSProperties;
}

interface PdfDownloadbtnComponentProps {
  pdfUrl?: string;
  fileName?: string;
  buttonText?: string;
  downloadingText?: string;
  addMessage?: (text: string, isUser?: boolean, showChips?: boolean) => void;
  setShowAboutChip?: (show: boolean) => void;
  setShowResumeChip?: (show: boolean) => void;
  setShowEndChatChip: (show: boolean) => void;
}

const PdfDownloadbtnComponent: React.FC<PdfDownloadbtnComponentProps> = ({
  pdfUrl = 'files/vimalkumar-resume.pdf',
  fileName = 'resume.pdf',
  buttonText = 'Download PDF',
  downloadingText = 'Downloading...',
  addMessage,
  setShowAboutChip,
  setShowResumeChip,
  setShowEndChatChip,
}) => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>, hoverColor: string): void => {
    (e.target as HTMLButtonElement).style.backgroundColor = hoverColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>): void => {
    (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
  };

  const downloadPdf = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    // Add message to chat if addMessage function is provided
    if (addMessage) {
      addMessage("Resume Download", true);
    }

    // Hide chips if functions are provided
    if (setShowAboutChip) setShowAboutChip(false);
    if (setShowResumeChip) setShowResumeChip(false);
    if (setShowEndChatChip) setShowEndChatChip(true);

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

      // Add success message to chat
      if (addMessage) {
        setTimeout(() => {
          addMessage("Thank you for downloading my resume! The download should start automatically.", false, true);
        }, 800);
      }

    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');

      // Add error message to chat
      if (addMessage) {
        setTimeout(() => {
          addMessage("Sorry, there was an error downloading the resume. Please try again.", false, true);
        }, 800);
      }
    } finally {
      setTimeout(() => setIsDownloading(false), 1000); // Add slight delay for better UX
    }
  };

  return (
    <button
      onClick={downloadPdf}
      disabled={isDownloading}
      style={{
        ...styles.chipButton,
        borderColor: '#4caf50',
        color: '#4caf50',
        opacity: isDownloading ? 0.7 : 1,
        cursor: isDownloading ? 'not-allowed' : 'pointer'
      }}
      onMouseEnter={(e) => !isDownloading && handleMouseEnter(e, '#e8f5e8')}
      onMouseLeave={handleMouseLeave}
    >
      <Download style={styles.chipIcon} size={14} />
      {isDownloading ? downloadingText : buttonText}
    </button>
  );
};

const styles: StylesType = {
  chipButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    border: '1px solid #c9f31d',
    color: '#c9f31d',
    borderRadius: '20px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  chipIcon: {
    marginRight: '4px'
  }
};

export default PdfDownloadbtnComponent;