import React, { Component } from 'react';


export default class TaskForm extends Component {

   state = {
      title: '',
      description: ''
   }

   onSubmit = (e) => {

      this.props.newTask(this.state.title, this.state.description);
      e.preventDefault();
   }

   onChange = (e) => {
      this.setState ({
         [e.target.name]: e.target.value
      })
   }

   render() {
      return (
         <>
            <form onSubmit={this.onSubmit}>
               <input
                  type="text"
                  name="title"
                  placeholder="Introduzca la tarea"
                  onChange={this.onChange}
                  value={this.state.title}
               />
               <br/>
               <textarea
                  name="description"
                  placeholder="Descripcion de la tarea"
                  onChange={this.onChange}
                  value={this.state.description}
               ></textarea>
               <br/>
               <button type="submit" className="btn"> Save</button>
            </form>
            <hr/>
         </>
      )
   }

}