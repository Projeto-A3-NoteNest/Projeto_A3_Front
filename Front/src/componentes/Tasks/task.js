import React, { useEffect, useState } from "react";
import "./task.css";
import apiLembretes from "../../api/apiLembretes";
import Card from "../Card/card";

function Task({ dayDiv }) {
  const [tasks, setTasks] = useState([]);
  const [preview, setPreview]= useState([]);
  console.log('preview',preview)


  //Função para apagar lembretes salvos
  const deleteTask = async (id) => {
    try {
      await apiLembretes.delete(`/lembretes/${id}`)
      const filterTasks = tasks.filter((task) => task.id!=id)
      setTasks(filterTasks);
      alert('Lembrete excluído')
    } catch (error) {
      alert('Erro ao excluir lembrete')
    }
  };

  //Função para apagar preview de lembretes
  const deleteTaskPreview = async (index) => {
    const filterTasks = tasks.filter((_task, i) => i!=index)
    setPreview(filterTasks);
  }

  //Função para criar lembretes
  const addNewTask = async (task) => {
    console.log('task',task);
    if (!task.id){
      try {
        const {data} = await apiLembretes.post('/lembretes',{
          nome_lembrete:task.title,
          data_lembrete: task.date,
          categoria: task.category,
          concluido: task.concluido,
          dia_semana: dayDiv.dayName
        })
        task.id=data.id_lembrete
        setTasks([...tasks,task]);
        alert('Lembrete Adicionado')
      } catch (error) {
        alert('Erro ao adicionar lembrete')
      }
    } else {
      try {
        await apiLembretes.put(`/lembretes/${task.id}`,{
          nome_lembrete:task.title,
          data_lembrete: task.date,
        })
        setTasks([...tasks,task]);
        alert('Lembrete atualizado')
      } catch (error) {
        alert('Erro ao atualizar lembrete')
      }
    }
  };

  const transitionNewTask = (task,index) => {
    addNewTask(task);
    setPreview(preview.filter((_task,i)=>{
      return i !== index;
    }))
  }
  
  const transitionPreviewTask = (task, index) => {
    setTasks(preview.filter((_task,i)=>{
      return i !== index;
    }))
    setPreview([...preview,task])
  }

  //adiciona um preview de tarefa com valores nulos
  const addNewPreview = () => {
    const newPreview = {
      title: "",
      description: "",
      date: "",
      category: "Categoria",
      concluido: false,
    };

    setPreview([...preview, newPreview]);
  }

  return (
    <div className="day-column">
      <p className="weekday">{dayDiv.dayName}</p>

      {preview.map((task, index) => (
        <Card
          task={task}
          index={index}
          onSave={transitionNewTask}
          onDelete={deleteTaskPreview}     
          preview={true}
        />
      ))}

      {tasks.map((task,index) => (
        <Card
        task={task}
        index={index}
        onSave={transitionPreviewTask}
        onDelete={deleteTask}     
        preview={false}
        />
      ))}

      <button className="new-task-btn" onClick={addNewPreview}>
        Novo Lembrete
      </button>
    </div>
  );
}

export default Task;
