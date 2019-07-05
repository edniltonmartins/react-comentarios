import React, {Component} from 'react';


class App extends Component {
  state = {
    comments: [
      'Comments 1',
      'Comments 2',
      'Comments 3'
    ]
  }
  addComments = () =>{
    this.setState({
      comments: [...this.state.comments, "Comentarios"]
    })
  }
  render(){
  return (
    <div>
    <div>
      <textarea></textarea>
      <button onClick={this.addComments}>Enviar</button>
    </div>
    <div>
      <div>Comments</div>
      { this.state.comments.map( c => {
        return <div> {c}</div>
      })}
      
    </div>
    </div>
  );
}
}

export default App;
