// INIT_APP
function app() {
    const root = document.querySelector('#root')
}

app()

// UTILS
function createElement(tag, className, text = '') {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text

    return element
}