import React, {Component} from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom'

import './App.css';

import tasksData from './samples/test.json';

import AppWDS from './components/AppWDS';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import Estilos from './components/Estilos';

import Navbar from './components/navbar/Navbar';


class App extends Component {

   state = {
      tasksData: tasksData
   }

   addTask = (title, description ) => {
      const newTask = {
         title,
         description,
         id: this.state.tasksData.length 
      }
      this.setState({
         tasksData: [...this.state.tasksData, newTask]
      })
   }

   delTask = (id) => {
      const task = this.state.tasksData.filter(t => t.id !== id);
      this.setState({tasksData: task})
   }

   checkDone = (id) => {
      const reviewTask = this.state.tasksData.map(task => {
         if (task.id === id){
            console.log (`la tarea , ${id} esta completada`)
            task.done = !task.done;
         }
         return task
      });
      this.setState({tasksData: reviewTask})
   }

   render(){
      return <div className="App">
         <Router>
            <Link className="links" to="/"> Inicio</Link> 
            <Link className="links" to="/task"> Task</Link> 
            <Link className="links" to="/posts"> Entradas</Link>
            <Link className="links" to="/estilos"> Estilos</Link>
            <Route exact path="/" render={() => {
               return (
                  <>
                  <AppWDS />
                  <Navbar />
                  
                  </>
               )
            }} />

            <Route path="/task" render={() => {
               return <div>
                  <TaskForm newTask={this.addTask} />
                  <Tasks
                     tasks={this.state.tasksData}
                     delete={this.delTask}
                     complete={this.checkDone}
                  />
               </div>
            }} />
            <Route path="/posts" component={Posts} />
            <Route path="/estilos" component={Estilos} />
         </Router>
      </div>
   }
}

export default App;
