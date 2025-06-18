import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";
import { Download } from "lucide-react";
import { Button } from "/src/components/ui/button";

const DownloadCVButton = ({ lang = "en" }) => {
  return (
    <PDFDownloadLink
      document={<CVDocument lang={lang} />}
      fileName={`CV_${lang}.pdf`}
      className="no-underline"
    >
      {({ loading }) =>
        loading ? (
          <Button disabled variant="outline">Generating...</Button>
        ) : (
          <Button className="flex items-center gap-2" variant="default">
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        )
      }
    </PDFDownloadLink>
  );
};

export default DownloadCVButton;
