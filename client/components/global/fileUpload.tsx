"use client";

import { Upload } from "lucide-react";

const FileUploadComponent: React.FC = () => {
  const handleFileUploadButtonClick = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener('change', (e) => {
        if (el.files && el.files.length > 0) {
            const file = el.files.item(0);
            
        }
    } )
    el.click();
  };

  return (
    <div
      onClick={handleFileUploadButtonClick}
      className="w-[300px] flex flex-col gap-4 rounded-xl items-center justify-center border-2 border-dotted py-6 px-8 cursor-pointer"
    >
      <h1>Upload your PDF</h1>
      <Upload />
    </div>
  );
};

export default FileUploadComponent;
