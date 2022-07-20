const AreaLabelRegEx = /(?:replies|comments|likes|retweet)/g

function removeTwitterGames() {
    for (const element of document.querySelectorAll("div[aria-label]")) {
        const area = element.getAttribute("aria-label")
        if (area !== null && AreaLabelRegEx.test(area)) {
            element.remove()
        }
    }
}

function isNotHomeScreen() {
    const prefixes = [ "/messages", "/explore", "/notifications", "/bookmarks", "/lists" ]
    for (const prefix of prefixes) {
        if (window.location.pathname.startsWith(prefix)) {
            return true
        }
    }
    return false
}

function removeSidebar() {
    for (const element of document.querySelectorAll(`div[data-testid="sidebarColumn"]`)) {
        element.remove()
    }
    const mainBox = document.querySelector("main > *")
    if (mainBox) {
        mainBox.style.width = isNotHomeScreen() ? "900px" : "700px"
    }
}

function removeChatBox() {
    const box = document.querySelector(`div[data-testid="DMDrawer"]`)
    if (box) {
        box.remove()
    }
}

function clean() {
    removeTwitterGames()
    removeSidebar()
    removeChatBox()
}

window.onload = () => {
    setTimeout(clean)
    setInterval(clean, 200)
}

