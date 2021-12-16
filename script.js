// INIT_APP
function app() {
    const root = document.querySelector('#root')
    const header = createHeader()
    root.append(header)
}

app()

// HANDLERS
function onHeaderClick(event) {
    if (event.target.id === 'buttonAdd') { clickButtonAdd() }
    else if (event.target.id === 'buttonDeleteAll') { clickButtonDeleteAll() }
    else if (event.target.id === 'buttonDeleteLast') { clickButtonDeleteLast() }
    else if (event.target.id === 'buttonShowAll') { clickButtonShowAll() }
    else if (event.target.id === 'buttonShowCompleted') { clickButtonShowCompleted() }
    document.getElementById('inputSearch').value = ''
}

function onTodoListClick(event) {
    if (event.target.id === 'checkbox') { clickCheckbox() }
    else if (event.target.id === 'buttonDelete') { clickButtonDelete() }
    document.getElementById('inputSearch').value = ''
}

function clickButtonAdd() {
    if (event.target.previousElementSibling.value === '') {
        document.getElementById('field').focus()
        return
    }
    const todo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        text: event.target.previousElementSibling.value,
        isCompleted: false,
        date: new Date().toLocaleDateString()
    }
    todos.push(todo)
    renderTodos(todos)
    document.getElementById('field').focus()
    document.getElementById('field').value = ''
}

function clickButtonDeleteAll() {
    todos.length = 0
    renderTodos(todos)
    document.getElementById('field').focus()
}

function clickCheckbox() {
    todos.forEach(function (todo) {
        if (todo.id === Number(event.target.parentElement.id))
            if (todo.isCompleted) {
                todo.isCompleted = false
            } else {
                todo.isCompleted = true
            }
    })
    renderTodos(todos)
}

function clickButtonDelete() {
    const index = todos.findIndex(todo => Number(event.target.parentElement.parentElement.id) === todo.id)
    todos.splice(index, 1)
    renderTodos(todos)
}

function clickButtonDeleteLast() {
    todos.pop()
    renderTodos(todos)
}

function clickButtonShowAll() {
    renderTodos(todos)
}

function clickButtonShowCompleted() {
    const todosIsCompleted = todos.filter(todo => todo.isCompleted)
    renderTodos(todosIsCompleted)
}

function onSearchChange(event) {
    const todosSearch = todos.filter(todo => todo.text.toLowerCase().includes(event.target.value.toLowerCase()))
    renderTodos(todosSearch)
}

// RENDER
function renderTodos(todos) {
    const todoList = createTodoList(todos)
    const todosDom = document.getElementById('list')
    const statDom = document.getElementById('textStatistics')
    todosDom.remove()
    const textStatisticsRender = createElement('span', 'flex-shrink-0', statistics())
    textStatisticsRender.id = 'textStatistics'
    textStatistics.replaceWith(textStatisticsRender)
    todoList.addEventListener('click', event => onTodoListClick(event))
    root.append(todoList)
}

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

function createTodoList(todos) {
    const list = createElement('div', 'd-flex flex-column gap-1', '')
    list.id = 'list'
    todos.forEach(todo => {
        const todoItem = createTodoItem(todo)
        list.append(todoItem)
    })
    return list
}

function createTodoItem(todo) {
    const todoItem = createElement('div', 'd-flex align-items-center gap-2 border border-3 border-dark rounded-3 py-2 px-2')
    const rightElements = createElement('div', 'd-flex flex-column align-items-end gap-3')
    todoItem.id = todo.id
    const input = createElement('input', 'form-check-input border border-3 border-dark rounded-3 bg-info', '')
    input.type = 'checkbox'
    input.checked = todo.isCompleted
    const text = createElement('p', 'm-0 flex-grow-1 bg-white p-2 rounded-3', todo.text)
    const date = createElement('span', 'bg-white p-2 rounded-3', todo.date)
    const buttonDelete = createElement('button', 'btn-close border border-3 border-dark rounded-3 bg-info', '')

    input.id = 'checkbox'
    buttonDelete.id = 'buttonDelete'

    input.style = 'width: 3rem; height: 2rem;'
    buttonDelete.style = 'width: 3rem; height: 1.1rem;'
    if (todo.isCompleted) {
        text.style = 'text-decoration: line-through; color: grey'
    }

    rightElements.append(buttonDelete, date)
    todoItem.append(input, text, rightElements)
    return todoItem
}

// UTILS
function createElement(tag, className, text = '') {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text

    return element
}