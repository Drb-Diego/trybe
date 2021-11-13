import "./App.css";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = [
  'estudar',
  'correr',
  'brincar com meu cachorro'
];

export default function App() {
  return(
    <div className='App'>
      {Task('teste')}
      {appointments.map((appointment) => Task(appointment))}
    </div>
  );
}
