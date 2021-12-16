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