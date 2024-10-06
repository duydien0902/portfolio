"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function DownloadCv() {
  const handleDownload = () => {
    const fileUrl = "/cv/cv_daoduydien.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "cv_daoduydien.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="bg-yellow-300 h-12 rounded-3xl uppercase hover:bg-yellow-400 text-gray-800"
    >
      Download cv
    </Button>
  );
}
