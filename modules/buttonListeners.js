const html = document.documentElement
const switchMode = document.querySelector(".switchButton")
const img = document.querySelector("#profile img")
const containerLang = document.querySelector("#containerLang")
const buttonLang = document.querySelectorAll(".buttonLang")
const langPrimary = document.querySelector("#langPrimary")
const langDropdown = document.querySelector("#langDropdown")
let dropdownVisible = false

function toggleMode() {
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
    buttonLang.forEach(button => {
        button.addEventListener("click", () => {
            if (dropdownVisible) {
                langDropdown.style.display = "none"
                langPrimary.style.display = "flex"
            } else {
                langDropdown.style.display = "grid"
                langPrimary.style.display = "none"
            }
            dropdownVisible = !dropdownVisible
        })
    })
}

toggleMode()
toggleDropdown()