const AreaLabelRegEx = /(replies|comments|likes)/g

function removeTwitterGames() {
    for (const element of document.querySelectorAll("div[aria-label]")) {
        const area = element.getAttribute("aria-label")
        if (area !== null && AreaLabelRegEx.test(area)) {
            element.remove()
        }
    }
}

function removeSidebar() {
    for (const element of document.querySelectorAll("div[data-testid]")) {
        if (element.getAttribute("data-testid") === "sidebarColumn") {
            element.remove()
        }
    }
    document.querySelector("main > *").style.width = "700px"
}

function clean() {
    removeTwitterGames()
    removeSidebar()
}

window.onload = () => {
    setTimeout(clean)
    setInterval(clean, 200)
}