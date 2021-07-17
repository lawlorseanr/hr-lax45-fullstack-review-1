import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      student: {}
    }

    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  getRandomStudent(){
    var ind = Math.floor(Math.random() * this.props.students.length);
    var student = this.props.students[ind];
    this.setState({ student });
  }

  componentDidMount() {
    this.getRandomStudent();
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.getRandomStudent}>Randomize</button>
          <h1>{this.state.student.name}</h1>
          <img src={this.state.student.imageUrl}></img>
        </div>
      </div>
    )
  }
}