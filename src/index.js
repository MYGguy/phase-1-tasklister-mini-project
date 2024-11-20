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
        <option value="high" id="high-prio">High</option>
        <option value="medium" class="medium-prio">Medium</option>
        <option value="low" class="low-prio">Low</option>
      </select>
    `;
    formElement.innerHTML = priorityCode;
    li.appendChild(formElement)

    //append item to page
    document.querySelector('#tasks').appendChild(li);

    //run priority-color-coder
    colorCode();

    form.reset();
  })
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

document.querySelector('option').addEventListener('click', colorCode);

function colorCode() {

  let highHigh = document.getElementById('high-prio');
  let lowLow = document.getElementsByClassName('low-prio');
  // let lists = document.querySelectorAll('#list');

  if (document.querySelectorAll('option').id = 'high-prio') {
    document.getElementById('high-prio').parentNode.parentNode.parentNode.parentNode.style.setProperty('background-color', '#64e3a1');
  }
}

// document.querySelector('#high-prio').parentNode.style.setProperty('background-color', 'green');

// document.getElementById('new-task-description').style.setProperty('backgroundColor', 'green');

// document.querySelector('h2').style.setProperty('color', 'blue');

// document.getElementById('list').style.setProperty('color', 'red')

// document.getElementById('list').parentNode.parentNode.style.setProperty('backgroundColor', 'green')

// document.querySelector('#list')['name'].style.setProperty('color', 'green')