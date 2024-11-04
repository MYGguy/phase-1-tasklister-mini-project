document.addEventListener("DOMContentLoaded", () => {
  submitItem();
});


function submitItem() {

  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let li = document.createElement('li');
    let taskItem = document.getElementById('new-task-description').value;
    li.textContent = taskItem;

    document.querySelector('#tasks').appendChild(li);

    form.reset();
  })
}
