"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export function PDFViewer({ pdfUrl, title }: { pdfUrl: string; title?: string }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      window.open(pdfUrl, "_blank");
    }
  }, [isMobile, pdfUrl]);

  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg bg-[var(--bits-surface-muted)] p-6">
        <p className="text-center text-sm text-bits-muted">
          Opening document in full screen...
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid-green inline-flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          Open Again
        </a>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between rounded-t-lg bg-[var(--bits-surface-muted)] px-4 py-3">
        <h3 className="text-sm font-semibold text-bits-heading">{title ?? "Document Preview"}</h3>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-bits-green hover:underline"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Open Full Size
        </a>
      </div>
      <iframe
        src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
        className="min-h-0 flex-1 rounded-b-lg border border-gray-200 dark:border-gray-700"
        title={title ?? "PDF Document"}
      />
    </div>
  );
}
