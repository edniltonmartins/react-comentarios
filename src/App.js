import React, {Component} from 'react';


class App extends Component {
  state = {
    newComment: '',
    comments: [
      'Comments 1',
      'Comments 2',
      'Comments 3'
    ]
  }
  addComments = () =>{
    // eslint-disable-next-line no-lone-blocks
    {/* ...this.state.comments 
        Produz um novo array
        o uso dos ... é chamdo de spreadOperator
        
    */}
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ''
    })
  }
  handleComment = event =>{
    this.setState({
      newComment: event.target.value
    })
  }
  render(){
  return (
    <div>
    <div>
    {/* Atribuindo valor de um atributo do state ao value do textarea
        com value={this.state.newComment}
    */}
      <textarea value={this.state.newComment} onChange={this.handleComment}></textarea>
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
