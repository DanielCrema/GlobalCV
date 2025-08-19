const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const pageNumberInput = document.getElementById("pageNumber");

const styleSheets = document.styleSheets;
let cvSheet = null;
for (let sheet of styleSheets) {
    if (sheet.href && sheet.href.endsWith("cv.css")) {
        cvSheet = sheet;
        break;
    }
}

const hoverRules = new WeakMap();

function changeHoverBackground(button, background) {
    if (hoverRules.has(button)) {
        const index = hoverRules.get(button);
        cvSheet.deleteRule(index);
        hoverRules.delete(button);
    }

    const rule = `#${button.id}:hover { background: ${background} !important }`;
    const index = cvSheet.insertRule(rule, cvSheet.cssRules.length);
    hoverRules.set(button, index);
}

function lockButton(button) {
    button.disabled = true;
    button.style.background = "var(--topbar-button-locked)";
    button.style.cursor = "not-allowed";
    if (cvSheet) {
        changeHoverBackground(button, "var(--topbar-button-locked)");
    }
}

// Unlock button: remove hover style
function unlockButton(button) {
    button.disabled = false;
    button.style.background = "var(--topbar-button)";
    button.style.cursor = "pointer";
    if (cvSheet) {
        changeHoverBackground(button, "var(--topbar-button-hover)");
    }
}

function turnPage(direction) {
    const pageCount = pageFlip.getPageCount();
    if (direction === 'prev' &&
        pageNumberInput.value === `1/${pageCount}`) {
        lockButton(prevButton)
        return
    }
    if (direction === 'next' &&
        pageNumberInput.value === `${pageCount}/${pageCount}`) {
        lockButton(nextButton)
        return
    }

    const orientation = pageFlip.getOrientation();
    const pagesLeap = orientation === "portrait" ? 1 : 2;

    const currentPage = window.pageFlip.getCurrentPageIndex() + 1;
    const previousPage = currentPage - pagesLeap;
    const nextPage = currentPage + pagesLeap;

    if (direction === 'prev' && previousPage > 0) {
        pageFlip.turnToPrevPage();
        pageNumberInput.value = `${previousPage}/${pageCount}`;
        if (nextButton.disabled === true) {
            unlockButton(nextButton)
        }
    }

    if (direction === 'next' && nextPage <= pageCount) {
        pageFlip.turnToNextPage();
        pageNumberInput.value = `${nextPage}/${pageCount}`;
        if (prevButton.disabled === true) {
            unlockButton(prevButton)
        }
    }
}

prevButton.addEventListener("click", () => {
    turnPage('prev');
});

nextButton.addEventListener("click", () => {
    turnPage('next');
});