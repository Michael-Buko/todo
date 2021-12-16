// INIT_APP
function app() {
    const root = document.querySelector('#root')
    const header = createHeader()
    root.append(header)
}

app()

// COMPONENTS
function createHeader() {
    const header = createElement('header', 'd-flex flex-column gap-2')
    const lineUp = createElement('div', 'd-flex align-items-center gap-2')
    const lineDown = createElement('div', 'd-flex align-items-center gap-2')
    const input = createElement('input', 'form-control flex-grow-1 border border-3 border-dark', '')
    const buttonAdd = createElement('button', 'btn btn-info border border-3 border-dark flex-shrink-0', 'Add')
    const buttonDeleteAll = createElement('button', 'btn btn-danger border border-3 border-dark flex-shrink-0', 'Delete All')
    const buttonDeleteLast = createElement('button', 'btn btn-danger border border-3 border-dark flex-shrink-0', 'Delete Last')
    const buttonShowAll = createElement('button', 'btn btn-info border border-3 border-dark flex-shrink-0', 'Show All')
    const buttonShowCompleted = createElement('button', 'btn btn-info border border-3 border-dark flex-shrink-0', 'Show Completed')
    const inputSearch = createElement('input', 'form-control flex-grow-1 border border-3 border-dark', '')

    input.id = 'field'
    buttonAdd.id = 'buttonAdd'
    buttonDeleteAll.id = 'buttonDeleteAll'
    buttonDeleteLast.id = 'buttonDeleteLast'
    buttonShowAll.id = 'buttonShowAll'
    buttonShowCompleted.id = 'buttonShowCompleted'
    inputSearch.id = 'inputSearch'

    lineUp.append(buttonDeleteAll, buttonDeleteLast, input, buttonAdd)
    lineDown.append(buttonShowAll, buttonShowCompleted, inputSearch)
    header.append(lineUp, lineDown)
    return header
}

// UTILS
function createElement(tag, className, text = '') {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text

    return element
}