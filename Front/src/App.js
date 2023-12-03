import './app.css';
import React, { useEffect, useState } from 'react';
import Header from './componentes/Header/header';
import Task from './componentes/Tasks/task.js';
import Footer from './componentes/Footer/footer.js';
import axios from 'axios';


function App() {

  const [tasks, setTasks] = useState([]);

  const days = [
    { id: 'sunday', dayName: 'Domingo' },
    { id: 'monday', dayName: 'Segunda' },
    { id: 'tuesday', dayName: 'Terça' },
    { id: 'wednesday', dayName: 'Quarta' },
    { id: 'thursday', dayName: 'Quinta' },
    { id: 'friday', dayName: 'Sexta' },
    { id: 'saturday', dayName: 'Sábado' }
  ];

  // useEffect(() => {
  //   // Faça uma chamada para o backend ao carregar o componente
  //   axios.get('http://localhost:5000/api/exemplo')
  //     .then(response => {
  //       (response.data.mensagem);
  //     })
  //     .catch(error => {
  //       console.error('Erro na chamada para o backend:', error);
  //     });
  // }, []);

  return (
    <div className='app'>
      <Header/>
      <main >
        <div className="days-container">
        {days.map((day) => (
            <Task key={day.id} dayDiv={day} />
          ))}
        </div>
      </main>
      <Footer/>
    </div>
      
  );
}

export default App;
