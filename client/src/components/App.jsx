import React from 'react';
import Add from './Add.jsx';
import List from './List.jsx';
import Random from './Random.jsx';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentList : []
    }

    this.getStudents = this.getStudents.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents()
  }

  getStudents(){
    axios.get('http://localhost:3000/api/students')
      .then(students => {
        var studentList = students.data;
        this.setState({ studentList });
      })
      .catch(err => console.error(err));
  }

  changePage(e){
    e.preventDefault();
    var page = e.target.value;
    this.setState({ page });
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <Add getStudents={this.getStudents}/>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <List students={this.state.studentList}/>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <Random students={this.state.studentList}/>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changePage}>Add Student</button>
          <button value='list' onClick={this.changePage}>List Students</button>
          <button value='random' onClick={this.changePage}>Random Student</button>
        </div>
      )
    }
  }
}