// INIT_APP
function app() {
    const root = document.querySelector('#root')
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

// UTILS
function createElement(tag, className, text = '') {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text

    return element
}