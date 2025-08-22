export function initDownloadButton(filepath) {
    const downloadBtn = document.getElementById("downloadButton");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            const fileName = filepath.match(/[^\\/]+$/);

            const link = document.createElement("a");
            link.href = filepath;
            link.setAttribute("download", fileName);
            link.style.display = "none";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}