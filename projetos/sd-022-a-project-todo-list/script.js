function checkSavedList() {
  if (localStorage.savedList) {
    const recoveredList = JSON.parse(localStorage.savedList);
    document.getElementById('lista-tarefas').innerHTML = recoveredList;
  }
}

checkSavedList();

function selectTask(event) {
  const currentSelected = document.querySelector('.selected');
  if (currentSelected) {
    currentSelected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function completeTask(event) {
  const taskClass = event.target.classList;
  if (taskClass.contains('completed')) {
    taskClass.remove('completed');
  } else {
    taskClass.add('completed');
  }
}

function createTask(input) {
  const taskList = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  task.textContent = input;
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', completeTask);
  taskList.append(task);
}

document.getElementById('criar-tarefa').addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
  if (input.value.trim()) {
    createTask(input.value);
    input.value = '';
  }
});

document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.getElementById('lista-tarefas').innerHTML = '';
});

document.getElementById('remover-finalizados').addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let task of completed) {
      task.remove();
  }
});

document.getElementById('salvar-tarefas').addEventListener('click', () => {
  const taskList = document.getElementById('lista-tarefas').innerHTML;
  localStorage.savedList = JSON.stringify(taskList);
});

document.getElementById('mover-cima').addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  const previousTask = selectedTask ? selectedTask.previousElementSibling : null;
  if (previousTask) {
    previousTask.before(selectedTask);
  }
});

document.getElementById('mover-baixo').addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  const nextTask = selectedTask ? selectedTask.nextElementSibling : null;
  if (nextTask) {
    nextTask.after(selectedTask);
  }
});

document.getElementById('remover-selecionado').addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  selectedTask.remove();
});
