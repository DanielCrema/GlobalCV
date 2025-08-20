function toggleMode() {
    const html = document.documentElement
    const switchMode = document.querySelector(".switchButton")
    const img = document.querySelector("#profile img")

    switchMode.addEventListener('click', () => {
        const isCvPage = html.classList.contains("cv-page")
        const alt = "Avatar Daniel Crema"
        const darkSrc = `${isCvPage ? ".." : "."}/assets/avatar.png`
        const lightSrc = `${isCvPage ? ".." : "."}/assets/avatar-light.png`

        html.classList.toggle("light")
        if (html.classList.contains("light")) {
            img.setAttribute("alt", alt)
            img.setAttribute("src", lightSrc)
        } else {
            img.setAttribute("alt", alt)
            img.setAttribute("src", darkSrc)
        }
    })
}

function toggleDropdown() {
    const buttonLang = document.querySelectorAll(".buttonLang")
    const langPrimary = document.querySelector("#langPrimary")
    const langDropdown = document.querySelector("#langDropdown")
    let autoCloseTimeout = null
    let dropdownVisible = false

    buttonLang.forEach(button => {
        button.addEventListener("click", () => {
            if (dropdownVisible) {
                // close dropdown
                langDropdown.style.display = "none"
                langPrimary.style.display = "flex"
                dropdownVisible = false

                // cancel any running timeout
                if (autoCloseTimeout) {
                    clearTimeout(autoCloseTimeout)
                    autoCloseTimeout = null
                }
            } else {
                // open dropdown
                langDropdown.style.display = "grid"
                langPrimary.style.display = "none"
                dropdownVisible = true

                // cancel any previous timeout, then start a new one
                if (autoCloseTimeout) {
                    clearTimeout(autoCloseTimeout)
                }
                autoCloseTimeout = setTimeout(() => {
                    if (dropdownVisible) {
                        langDropdown.style.display = "none"
                        langPrimary.style.display = "flex"
                        dropdownVisible = false
                    }
                }, 7000)
            }
        })
    })
}

toggleMode()
toggleDropdown()