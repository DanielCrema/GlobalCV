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
        html.classList.toggle("light")

        if (html.classList.contains("light")) {
            img.setAttribute("src", "./assets/avatar-light.png")
            img.setAttribute("alt", "Avatar Daniel Crema for Light-Mode")
        } else {
            img.setAttribute("src", "./assets/avatar.png")
            img.setAttribute("alt", "Avatar Daniel Crema")
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
                langDropdown.style.display = "flex"
                langPrimary.style.display = "none"
            }
            dropdownVisible = !dropdownVisible
        })
    })
}

toggleMode()
toggleDropdown()