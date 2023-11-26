import './app.css';
import Header from './componentes/Header/header';
import Task from './componentes/Tasks/task.js';
import Footer from './componentes/Footer/footer.js';


function App() {
  const days = [
    { id: 'monday', dayName: 'Segunda' },
    { id: 'tuesday', dayName: 'Terça' },
    { id: 'wednesday', dayName: 'Quarta' },
    { id: 'thursday', dayName: 'Quinta' },
    { id: 'friday', dayName: 'Sexta' },
    { id: 'saturday', dayName: 'Sábado' },
    { id: 'sunday', dayName: 'Domingo' }
  ];
  return (
    <div className="app">
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
