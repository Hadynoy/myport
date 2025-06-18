// PdfSection.jsx
import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";
import { Button } from "/src/components/ui/button";
import { Download } from "lucide-react";

const PdfSection = () => {
  const pdfRef = useRef();

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-end">
        <ReactToPdf
          targetRef={pdfRef}
          filename="section.pdf"
          options={{ orientation: "portrait", unit: "in", format: "A4" }}
          scale={0.8}
        >
          {({ toPdf }) => (
            <Button onClick={toPdf} className="gap-2">
              <Download size={16} />
              Download PDF
            </Button>
          )}
        </ReactToPdf>
      </div>

      {/* DO NOT put ref on motion.div or inside a custom component */}
      <div ref={pdfRef} className="p-4 space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Downloadable PDF Section</h1>
        <p className="text-gray-700">
          Everything inside this div will be converted to PDF when the button is clicked.
        </p>
      </div>
    </section>
  );
};

export default PdfSection;
