const html = document.documentElement
const switchMode = document.querySelector(".switchButton")
const img = document.querySelector("#profile img")

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

toggleMode()