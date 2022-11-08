import './index.css';
import Employees from './components/Employees';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
      id: 1,
      name: "Caleb", 
      role: "Developer", 
      img: "https://images.pexels.com/photos/13616572/pexels-photo-13616572.jpeg?cs=srgb&dl=pexels-phgaltri-13616572.jpg&fm=jpg&_gl=1*i0epgb*_ga*MTM4MDAyMDkzNi4xNjYzMTA3ODE5*_ga_8JE65Q40S6*MTY2NjI3NTQzNy45LjEuMTY2NjI3NTQ4MS4wLjAuMA.."
      },
      {
      id: 2,
      name: "Sal", 
      role: "Manager", 
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?cs=srgb&dl=pexels-mateus-souza-3586798.jpg&fm=jpg&_gl=1*6uwdee*_ga*MTM4MDAyMDkzNi4xNjYzMTA3ODE5*_ga_8JE65Q40S6*MTY2NjI3NTQzNy45LjEuMTY2NjI3NjI4Ny4wLjAuMA.."
      },
      {
      id: 3,
      name: "John", 
      role: "Director of Engineering", 
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg&_gl=1*1c3ng2y*_ga*MTM4MDAyMDkzNi4xNjYzMTA3ODE5*_ga_8JE65Q40S6*MTY2NjI3NTQzNy45LjEuMTY2NjI3NjM4NS4wLjAuMA.."
      },
      {
      id: 4,
      name: "Melanie", 
      role: "Software Engineer", 
      img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?cs=srgb&dl=pexels-marcio-bordin-1840608.jpg&fm=jpg&_gl=1*zdy3n1*_ga*MTM4MDAyMDkzNi4xNjYzMTA3ODE5*_ga_8JE65Q40S6*MTY2NjI3NTQzNy45LjEuMTY2NjI3NjQyNy4wLjAuMA.."
      },
      {
      id: 5,
      name: "Corey", 
      role: "Devops Guy", 
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?cs=srgb&dl=pexels-yogendra-singh-3748221.jpg&fm=jpg&_gl=1*110v2ot*_ga*MTM4MDAyMDkzNi4xNjYzMTA3ODE5*_ga_8JE65Q40S6*MTY2NjI3NTQzNy45LjEuMTY2NjI3NjQwNy4wLjAuMA.."
      },
      {
      id: 6,
      name: "Jake", 
      role: "Senior Intern", 
      img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?cs=srgb&dl=pexels-teddy-tavan-4890733.jpg&fm=jpg&_gl=1*1m16j6v*_ga*MTM4MDAyMDkzNi4xNjYzMTA3ODE5*_ga_8JE65Q40S6*MTY2NjI3NTQzNy45LjEuMTY2NjI3NjQ1Ni4wLjAuMA.."
      },

    ]
  );
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id){
        return {...employee, name: newName, role: newRole }
      }

      return employee
    });
    setEmployees(updatedEmployees)
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
          <>
          <input type='text' onChange={(e)=> {
            setRole(e.target.value);
          }} />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee)=> {
              return (
              <Employees 
              key={employee.id}
              id={employee.id}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}
              updateEmployee={updateEmployee}/>
              )
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
          </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>

  );
}
  

export default App;
