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

    //append item to page
    document.querySelector('#tasks').appendChild(li);

    form.reset();
  })
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
