//VERSAO TESTE
function addNewTask(btn, dayDiv) {
  const dayCol = document.createElement('div');
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-div'); // Adiciona a classe para estilização em CSS
  
  // Título
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.placeholder = 'Título';
  titleInput.classList.add('title-input')
  
  // Data
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.classList.add('date-input')
  
  // Categoria
  const categorySelect = document.createElement('select');
  const categoryOption1 = document.createElement('option');
  categoryOption1.value = 'category1';
  categoryOption1.text = 'Categoria 1';
  const categoryOption2 = document.createElement('option');
  categoryOption2.value = 'category2';
  categoryOption2.text = 'Categoria 2';
  categorySelect.add(categoryOption1);
  categorySelect.add(categoryOption2);
  categorySelect.classList.add('category-select')

  // Descrição
  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.placeholder = 'Descrição';
  descriptionInput.classList.add('description-input')
  
  //Função para ajustar a altura do input de texto
  descriptionInput.addEventListener('input', function () {
    this.style.minHeight = '30px';
    this.style.height = Math.min(this.scrollHeight, 200) + 'px'; // Define a altura máxima como 200px
  });
  
  taskDiv.appendChild(titleInput);
  taskDiv.appendChild(descriptionInput);
  taskDiv.appendChild(dateInput);
  taskDiv.appendChild(categorySelect);

  // Adicionando a div da tarefa ao dayCol
  dayCol.appendChild(taskDiv);
  dayDiv.appendChild(dayCol);
  dayDiv.appendChild(btn);

//   //Lib para fazer os elementos serem "arrastaveis"
//   const draggable = new Draggable(taskDiv, {
//     draggable: '.task-div',
//     handle: '.task-div', 
//   });
}

// Segunda
const btnMonday = document.querySelector('#btn-monday');
const mondayDiv = document.querySelector('#monday');
btnMonday.addEventListener('click', () => addNewTask(btnMonday, mondayDiv));

//Terça
const btnTuesday = document.querySelector('#btn-tuesday');
const tuesdayDiv = document.querySelector('#tuesday');
btnTuesday.addEventListener('click', () => addNewTask(btnTuesday, tuesdayDiv));

//Quarta
const btnWednesday = document.querySelector('#btn-wednesday');
const wednesdayDiv = document.querySelector('#wednesday');
btnWednesday.addEventListener('click', () => addNewTask(btnWednesday, wednesdayDiv));

//Quinta
const btnThursday = document.querySelector('#btn-thursday');
const thursdayDiv = document.querySelector('#thursday');
btnThursday.addEventListener('click', () => addNewTask(btnThursday, thursdayDiv));

//Sexta
const btnFriday = document.querySelector('#btn-friday');
const fridayDiv = document.querySelector('#friday');
btnFriday.addEventListener('click', () => addNewTask(btnFriday, fridayDiv));

//Sábado
const btnSaturday = document.querySelector('#btn-saturday');
const saturdayDiv = document.querySelector('#saturday');
btnSaturday.addEventListener('click', () => addNewTask(btnSaturday, saturdayDiv));

//Domingo
const btnSunday = document.querySelector('#btn-sunday');
const sundayDiv = document.querySelector('#sunday');
btnSunday.addEventListener('click', () => addNewTask(btnSunday, sundayDiv));
