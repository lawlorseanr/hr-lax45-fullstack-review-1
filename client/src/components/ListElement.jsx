import React from 'react';

class ListElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldName: props.student.name,
      name: props.student.name,
      editToggled: false
    }

    this.changeToggleHandler = this.changeToggleHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
  }

  changeNameHandler(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    }, () => console.log(this.state));
  }

  changeToggleHandler(e) {
    e.preventDefault();
    this.setState({
      name: this.state.oldName,
      editToggled: !this.state.editToggled
    }, () => console.log(this.state));
  }

  render() {
    if (!this.state.editToggled) {
      return (
        <span>
          <div value="name" onClick={this.changeToggleHandler}>{this.state.name}</div>
          <img src={this.props.student.imageUrl}></img>
        </span>
      );
    } else {
      return (
        <span>
          <input type="text" placeholder={this.state.name} onChange={this.changeNameHandler}/>
          <button onClick={this.changeToggleHandler}>Cancel</button>
          <button>Update</button>
          <img src={this.props.student.imageUrl}></img>
        </span>
      );
    }
  }
}

export default ListElement