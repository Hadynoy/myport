// src/components/CVDownload.jsx
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";

const DownloadCV = () => {
  return (
    <PDFDownloadLink
      document={<CVDocument />}
      fileName="Onubaiye_Adinoyi_CV.pdf"
      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-black text-white hover:bg-gray-900 transition-colors rounded-none shadow-none"
    >
      {({ loading }) => (loading ? "Preparing..." : "Download CV")}
    </PDFDownloadLink>
  );
};

export default DownloadCV;
