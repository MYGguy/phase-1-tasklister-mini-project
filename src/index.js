document.addEventListener("DOMContentLoaded", () => {
  submitItem();
});


function submitItem() {

  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    //grab and create new list item
    let li = document.createElement('li');
    let taskItem = document.getElementById('new-task-description').value;
    li.textContent = `${taskItem} `;

    //create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', handleDelete
    )
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);

    //create priority dropdown
    let formElement = document.createElement('form');
    formElement.id = 'priority-list';
    let priorityCode = `
      <label for="priority"> Priority Level:</label>
      <select name="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    `;
    formElement.innerHTML = priorityCode;
    li.appendChild(formElement)

    //append item to page
    document.querySelector('#tasks').appendChild(li);

    form.reset();
  })
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
