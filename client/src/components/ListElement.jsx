import React from 'react';
import axios from 'axios';

class ListElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student: props.student,
      oldName: props.student.name,
      name: props.student.name,
      editToggled: false
    }

    this.changeToggleHandler = this.changeToggleHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeNameHandler(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }

  changeToggleHandler(e) {
    e.preventDefault();
    this.setState({
      name: this.state.oldName,
      editToggled: !this.state.editToggled
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === this.state.oldName) {
      return this.setState({
        editToggled: !this.state.editToggled,
      })
    }

    axios.patch(`http://localhost:3000/api/students/:${this.state.student._id}`, {
      name: this.state.name
    })
      .then(() => {
        this.setState({
          editToggled: !this.state.editToggled,
          oldName: this.state.name
        })
      })
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.editToggled) {
      return (
        <div>
          <br></br>
          <span>
            <div value="name" onClick={this.changeToggleHandler}>{this.state.name}</div>
            <img src={this.props.student.imageUrl}></img>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <br></br>
          <span>
            <input type="text" value={this.state.name} onChange={this.changeNameHandler}/>
            <button onClick={this.changeToggleHandler}>Cancel</button>
            <button onClick={this.handleSubmit}>Update</button>
            <br></br>
            <img src={this.props.student.imageUrl}></img>
          </span>
        </div>
      );
    }
  }
}

export default ListElement