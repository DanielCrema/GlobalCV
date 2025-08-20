export function initFlipbook(PageFlipClass, pdfjsLib, pdfUrl, flipbookId) {
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageNumberInput = document.getElementById("pageNumber");
    function setupButtonsWidth() {
        const buttonsWidth = prevButton.offsetWidth > nextButton.offsetWidth ? prevButton.offsetWidth : nextButton.offsetWidth;

        prevButton.style.width = `${buttonsWidth}px`;
        nextButton.style.width = `${buttonsWidth}px`;
    }
    setupButtonsWidth();

    const book = document.getElementById(flipbookId);

    const pageFlip = new PageFlipClass(book, {
        width: 800,
        height: 1200,
        minWidth: 280,
        minHeight: 420,
        maxWidth: 1200,
        maxHeight: 1800,
        maxShadowOpacity: 0.5,
        startZIndex: 300,
        size: "stretch",
        usePortrait: true,
        autoSize: true,
        drawShadow: true,
        useMouseEvents: false,
        mobileScrollSupport: false,
        // clickEventForward: false,
    });

    pdfjsLib.getDocument(pdfUrl).promise.then(async (pdf) => {
        const pageElements = [];

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({ canvasContext: context, viewport }).promise;

            const pageDiv = document.createElement("div");
            pageDiv.classList.add("page");

            const img = document.createElement("img");
            img.src = canvas.toDataURL();
            img.style.width = "100%";
            img.style.height = "100%";
            pageDiv.appendChild(img);

            pageElements.push(pageDiv);
        }

        pageFlip.loadFromHTML(pageElements);
    });

    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobileDevice() && screen.orientation) {
        screen.orientation.lock('portrait').catch((e) => {
            console.error("Orientation lock failed:", e);
        });
    }

    pageFlip.on('flip', (e) => {
        const pageCount = pageFlip.getPageCount();
        pageNumberInput.value = `${e.data + 1}/${pageCount}`;
    });

    return pageFlip
}