import React, { Component } from 'react'

export default class Posts extends Component {

   state = {
      posts: []
   }


   async componentDidMount() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      this.setState({posts: data});
   }

   render() {
      return (
         <>
            <h1> Comentarios - Entradas</h1>
            {
               this.state.posts.map(post => {
                  return (
                     <div key={post.id}>
                        <span>{post.id} - </span>
                        <span>{post.title}</span>
                        <br/>
                        <br/>
                     </div>
                  )
               })
            }
         </>
      )
   }
}

