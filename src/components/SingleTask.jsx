import React, { Component } from 'react';

class SingleTask extends Component {
   render(){
      const {data} = this.props;
      return (
               <div className="span">
                  <span> {data.id} -</span>
                  <span> {data.title} -</span>
                  <span> {data.description} </span>
                  <input
                     type='checkbox'
                     onChange={this.props.complete.bind(this, data.id)}
                  />
                  <button
                     className="btn"
                     onClick={this.props.delete.bind(this, data.id)}
                  >
                     Delete
                  </button>
                  <hr/>
               </div>
      )
   }
}

export default SingleTask;
