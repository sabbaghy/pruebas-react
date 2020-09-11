import React, { Component } from 'react';

import SingleTask from './SingleTask';

export default class Tasks extends Component {
   render() {
      return (
         <>
            <h1>Prueba</h1>
            {this.props.tasks.map((task => 
               <SingleTask
                  data={task}
                  key={task.id}
                  delete={this.props.delete}
                  complete={this.props.complete}
               />
            ))}
         </>
      )
   }
}