const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const pageNumberInput = document.getElementById("pageNumber");

async function prevListener() {
    const currentPage = window.pageFlip.getCurrentPageIndex() + 1;
    const pageCount = pageFlip.getPageCount();
    const orientation = pageFlip.getOrientation();
    const pagesLeap = orientation === "portrait" ? 1 : 2;

    if (orientation === "portrait") {
    pageFlip.turnToPrevPage();
    } else {
        pageFlip.flipPrev();
    }

    if (currentPage - pagesLeap > 0) {
        pageNumberInput.value = `${currentPage - pagesLeap}/${pageCount}`;
    }

    if (orientation === "landscape") {
        prevButton.disabled = true;
        await new Promise(r => setTimeout(r, 1000));
        prevButton.disabled = false;
    }
}

async function nextListener() {
    const currentPage = window.pageFlip.getCurrentPageIndex() + 1;
    const pageCount = pageFlip.getPageCount();
    const orientation = pageFlip.getOrientation();
    const pagesLeap = orientation === "portrait" ? 1 : 2;

    pageFlip.flipNext({ corner: 'bottom' })

    if (currentPage + pagesLeap <= pageCount) {
        pageNumberInput.value = `${currentPage + pagesLeap}/${pageCount}`;
    }
    
    nextButton.disabled = true;
    await new Promise(r => setTimeout(r, 1000));
    nextButton.disabled = false;
}

prevButton.addEventListener("click", async () => {
    await prevListener();
});

nextButton.addEventListener("click", async () => {
    await nextListener();
});