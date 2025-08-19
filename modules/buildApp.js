export function buildApp(language, relativePathToRoot) {
    function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const englishSetup = {
        html: {
            lang: 'en',
            id: 'english-page',
        },
        title: 'International CV',
        topbarHeading: 'Pages',
        prevButtonText: 'Previous',
        nextButtonText: 'Next',
        footer: '© Daniel Borges Crema. All rights reserved.'
    }

    let appSetup = {};
    let flagOrder = [];
    const langNamesNative = {
        en: "English",
        pt: "Português",
        es: "Español",
        fr: "Français"
    };

    switch (language) {
        case 'en':
            appSetup = englishSetup;
            flagOrder = ['en', 'br', 'es', 'fr'];
            break;
        case 'pt':
            appSetup = portugueseSetup;
            flagOrder = ['br', 'en', 'es', 'fr'];
            break;
        case 'es':
            appSetup = spanishSetup;
            flagOrder = ['es', 'en', 'br', 'fr'];
            break;
        case 'fr':
            appSetup = frenchSetup;
            flagOrder = ['fr', 'en', 'br', 'es'];
            break;
        default:
            appSetup = englishSetup;
    }

    const app = `
        <div id="containerLang">
            <div id="langPrimary" class="langPrimary${capitalize(language)}">
                <img class="icon-flag ${language} clickable buttonLang" src="../assets/icon-flag-${language}.svg"
                    alt="Languages Button: ${langNamesNative[language]}" />
            </div>
            <div id="langDropdown">
                <img class="icon-flag ${language} clickable buttonLang" src="../assets/icon-flag-${language}.svg"
                    alt="Languages Button: ${langNamesNative[language]}" />
                <a href="../portuguese.html">
                    <img class="icon-flag ${flagOrder[1]} clickable langSecondary" src="../assets/icon-flag-${flagOrder[1]}.svg"
                        alt="${langNamesNative[flagOrder[1]]} Flag" />
                </a>
                <a href="../spanish.html">
                    <img class="icon-flag ${flagOrder[2]} clickable langSecondary" src="../assets/icon-flag-${flagOrder[2]}.svg"
                        alt="${langNamesNative[flagOrder[2]]} Flag" />
                </a>
                <a href="../french.html">
                    <img class="icon-flag ${flagOrder[3]} clickable langSecondary" src="../assets/icon-flag-${flagOrder[3]}.svg"
                        alt="${langNamesNative[flagOrder[3]]} Flag" />
                </a>
            </div>
        </div>

        <div id="profile">
            <img src="../assets/avatar.png" alt="Avatar Daniel Crema">
            <p>@DanielCrema</p>
        </div>

        <div id="switch">
            <button class="switchButton"></button>
            <span></span>
        </div>

        <div id="title">
            <p>${appSetup.title}</p>
        </div>

        <div id="containerFlipbook">
            <div id="containerTopbar">
                <p class="topbarHeading">${appSetup.topbarHeading}</p>
                <div class="topbar">
                    <button id="prevPage">${appSetup.prevButtonText}</button>
                    <input type="text" id="pageNumber" disabled />
                    <button id="nextPage">${appSetup.nextButtonText}</button>
                </div>
            </div>

            <div id="flipbook"></div>
        </div>

        <div id="email">
            <a href="mailto:danielborgescrema@gmail.com" target="_blank" rel="noopener noreferrer">
                <ion-icon name="mail-outline"></ion-icon>
            </a>
            <p>danielborgescrema@gmail.com</p>
        </div>

        <div id="social-links">
            <a href="https://github.com/DanielCrema" target="_blank">
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/daniel-crema-dev" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://wa.link/x1p73m" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="https://danielcrema.carrd.co/" target="_blank" rel="noopener noreferrer">
                <ion-icon name="briefcase-outline"></ion-icon>
            </a>
        </div>

        <footer>
            <p lang="en">${appSetup.footer}</p>
        </footer>
    `

    function injectScript(src) {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script)
    }

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.innerHTML = app;
    document.documentElement.lang = appSetup.html.lang; // update <html lang="">
    document.documentElement.id = appSetup.html.id; // update <html id="">

    injectScript(`${relativePathToRoot}/modules/buttonListeners.js`);
    injectScript(`${relativePathToRoot}/modules/structured-data.js`);
    injectScript(`${relativePathToRoot}/modules/navigateFlipbook.js`);
}