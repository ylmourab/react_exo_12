import React, { Component } from 'react'

export class App extends Component {
  state ={
    nombreArticle : 0
    
  }

  add = () =>{
    this.setState({
      nombreArticle : this.state.nombreArticle + 1
    })

  }
  render() {
    return (
      <div>
        <h1>{this.state.nombreArticle < 2 ? "il n'y a pas assez d'article (il faut minimum 2 article)" : `il y a ${this.state.nombreArticle} article`}</h1>
    <h2>{this.state.nombreArticle}</h2>
    <button onClick={this.add}>ajouter un article</button>
      </div>
    )
  }
}

export default App
