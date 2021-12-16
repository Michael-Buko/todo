// INIT_APP
function app() {
    const root = document.querySelector('#root')
}

app()

// COMPONENTS
function createTodoList(todos) {
    const list = createElement('div', 'd-flex flex-column gap-1', '')
    list.id = 'list'
    todos.forEach(todo => {
        const todoItem = createTodoItem(todo)
        list.append(todoItem)
    })
    return list
}

// UTILS
function createElement(tag, className, text = '') {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = text

    return element
}