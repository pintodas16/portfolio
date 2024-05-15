const PDF_FILE_URL = "/assets/PintoDas_CSE_LU.pdf";
function DownloadBtn({ className }) {
  const handleDownloadPdf = () => {
    console.log("download");
    const aTag = document.createElement("a");
    aTag.href = PDF_FILE_URL;
    aTag.setAttribute("download", "PintoDas_CSE_LU.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <button
      onClick={handleDownloadPdf}
      className={` ${className} px-4 py-1.5 border-2 border-blue-600 bg-blue-600 text-gray-50 font-medium rounded-xl transition-colors hover:bg-gray-100 hover:text-blue-600 active:bg-blue-700 active:text-gray-500`}
    >
      Download CV
    </button>
  );
}

export default DownloadBtn;
