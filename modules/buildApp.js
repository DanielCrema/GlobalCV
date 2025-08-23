export function buildApp(language, relativePathToRoot) {
    if (!language || !relativePathToRoot) {
        return
    }
    // Clear elegant fail message
    const container = document.getElementById("container");
    container.innerHTML = "";

    // Function to capitalize. Since Javascript doesn't have it :)
    function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    // Setups per language
    const englishSetup = {
        title: 'International CV',
        topbarHeading: 'Pages',
        prevButtonText: 'Previous',
        nextButtonText: 'Next',
        footer: '© Daniel Borges Crema. All rights reserved.',
        langHeading: 'Select Language',
        downloadButtonLabel: 'Download this CV',
        flagOrder: ['en', 'br', 'es', 'fr'],
        flagLinks: ['', './portuguese.html', './spanish.html', './french.html']
    }

    const portugueseSetup = {
        title: 'Currículo Internacional',
        topbarHeading: 'Páginas',
        prevButtonText: 'Anterior',
        nextButtonText: 'Próximo',
        footer: '© Daniel Borges Crema. Todos os direitos reservados.',
        langHeading: 'Selecionar Idioma',
        downloadButtonLabel: 'Baixar este CV',
        flagOrder: ['br', 'en', 'es', 'fr'],
        flagLinks: ['', './english.html', './spanish.html', './french.html']
    }

    const spanishSetup = {
        title: 'Currículo Internacional',
        topbarHeading: 'Páginas',
        prevButtonText: 'Anterior',
        nextButtonText: 'Próximo',
        footer: '© Daniel Borges Crema. Todos los derechos reservados.',
        langHeading: 'Seleccionar Idioma',
        downloadButtonLabel: 'Descargar este CV',
        flagOrder: ['es', 'en', 'br', 'fr'],
        flagLinks: ['', './english.html', './portuguese.html', './french.html']
    }

    const frenchSetup = {
        title: 'CV International',
        topbarHeading: 'Pages',
        prevButtonText: 'Précédent',
        nextButtonText: 'Suivant',
        footer: '© Daniel Borges Crema. Tous droits réservés.',
        langHeading: 'Sélectionner Langue',
        downloadButtonLabel: 'Télécharger ce CV',
        flagOrder: ['fr', 'en', 'br', 'es'],
        flagLinks: ['', './english.html', './portuguese.html', './spanish.html']
    }

    // Build app setup
    let appSetup = {};
    const langNamesNative = {
        en: "English",
        pt: "Português",
        es: "Español",
        fr: "Français"
    };

    switch (language) {
        case 'en':
            appSetup = englishSetup;
            break;
        case 'pt':
            appSetup = portugueseSetup;
            break;
        case 'es':
            appSetup = spanishSetup;
            break;
        case 'fr':
            appSetup = frenchSetup;
            break;
        default:
            appSetup = englishSetup;
    }

    // Build app HTML
    const app = `
        <div id="containerLang">
            <p id="langHeading">${appSetup.langHeading}</p>
            <div id="langPrimary" class="langPrimary${capitalize(language)}">
                <img class="icon-flag ${appSetup.flagOrder[0]} clickable buttonLang" src="../assets/icon-flag-${appSetup.flagOrder[0]}.svg"
                    alt="Switch languages"/>
            </div>
            <div id="langDropdown">
                <img class="icon-flag ${appSetup.flagOrder[0]} clickable buttonLang" src="../assets/icon-flag-${appSetup.flagOrder[0]}.svg"
                    alt="Switch languages: Close" />
                <a href="${appSetup.flagLinks[1]}">
                    <img class="icon-flag ${appSetup.flagOrder[1]} clickable langSecondary" src="../assets/icon-flag-${appSetup.flagOrder[1]}.svg"
                        alt="${langNamesNative[appSetup.flagOrder[1]]} Flag" />
                </a>
                <a href="${appSetup.flagLinks[2]}">
                    <img class="icon-flag ${appSetup.flagOrder[2]} clickable langSecondary" src="../assets/icon-flag-${appSetup.flagOrder[2]}.svg"
                        alt="${langNamesNative[appSetup.flagOrder[2]]} Flag" />
                </a>
                <a href="${appSetup.flagLinks[3]}">
                    <img class="icon-flag ${appSetup.flagOrder[3]} clickable langSecondary" src="../assets/icon-flag-${appSetup.flagOrder[3]}.svg"
                        alt="${langNamesNative[appSetup.flagOrder[3]]} Flag" />
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

        <div id="containerDownloadButton">
            <button id="downloadButton">
                <ion-icon name="download-outline" id="downloadIcon"></ion-icon>
                <p>${appSetup.downloadButtonLabel}</p>
            </button>
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
    
        <div id="email">
            <a href="mailto:danielborgescrema@gmail.com" target="_blank" rel="noopener noreferrer">
                <ion-icon name="mail-outline"></ion-icon>
            </a>
            <p>danielborgescrema@gmail.com</p>
        </div>

        <footer>
            <p lang="en">${appSetup.footer}</p>
        </footer>
    `

    // Appending the content and scripts
    container.innerHTML = app;

    function injectScript(src) {
        const script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script)
    }
    injectScript(`${relativePathToRoot}/modules/buttonListeners.js`);
    injectScript(`${relativePathToRoot}/modules/structured-data.js`);
    injectScript(`${relativePathToRoot}/modules/navigateFlipbook.js`);
}