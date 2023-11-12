function addNewTask(btn, dayDiv) {
  const dayCol = document.createElement('div');
  const textarea = document.createElement('textarea');

  //estilizando area de texto
  textarea.style.width = '92%';
  textarea.style.height = '30px';
  textarea.style.border = 'none'; // Remove todas as bordas
  textarea.style.borderBottom = '1px solid #e0e0e0'; // Adiciona uma borda inferior
  textarea.style.resize = 'none';
  textarea.style.textAlign = 'center';
  textarea.style.lineHeight = '25px';
  textarea.style.overflow = 'hidden';

  textarea.addEventListener('input', function () {
    this.style.height = (this.scrollHeight) + 'px'; // Define a altura com base no scrollHeight
  });

  dayCol.appendChild(textarea);
  dayDiv.appendChild(dayCol);
  dayDiv.appendChild(btn);
}

//Segunda
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
