import React, { useEffect, useState } from 'react';
import './task.css'

function Task({ dayDiv }) {
  const [tasks, setTasks] = useState([]);

  const addNewTask = () => {
    const newTask = {
      title: '',
      description: '',
      date: '',
      category: 'Categoria',
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleCategoryChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].category = value;
    setTasks(updatedTasks);
  };

  const getCategoryColor = (category) => {
    // Mapeie categorias para cores desejadas
    const categoryColors = {
      'Trabalho': '#FFCCDA',
      'Estudo': '#FFFCD3',
      'Social': '#BCFFE6',
      'Casa': '#CCF5FF',
      'Saúde': '#E3BCFF',
    };

    return categoryColors[category] || 'white';
  }  

  return (
    <div className='day-column'>
      <p className="weekday">{dayDiv.dayName}</p>

      {tasks.map((task, index) => (
        <div id={`task-${index}header`}>
          <div key={index} id={`task-${index}`} className="task-div">
            <button onClick={() => deleteTask(index)} className="delete-button">
              X
            </button>
            <input type="text" placeholder="Título" className="title-input"  />
            <textarea placeholder="Descrição" className="description-input" />
            <input type="date" className="date-input" />

            <select 
            className="category-select" 
            value={task.category} onChange={(e) => handleCategoryChange(index, e.target.value)} 
            style={{ backgroundColor: getCategoryColor(task.category) }}
            >
              <option value="Categoria" style={{ backgroundColor: 'white' }}>Categoria</option>
              <option value="Trabalho" style={{ backgroundColor: getCategoryColor('Trabalho') }}>Trabalho</option>
              <option value="Estudo" style={{ backgroundColor: getCategoryColor('Estudo') }}>Estudo</option>
              <option value="Social" style={{ backgroundColor: getCategoryColor('Social') }}>Social</option>
              <option value="Casa" style={{ backgroundColor: getCategoryColor('Casa') }}>Casa</option>
              <option value="Saúde" style={{ backgroundColor: getCategoryColor('Saúde') }}>Saúde</option>
            </select>

          </div>
        </div>
      ))}

      <button className="new-task-btn" onClick={addNewTask}>
        Novo Lembrete
      </button>
    </div>
  );
  
}

export default Task;