import React, { Component } from "react";
import FlipMove from "react-flip-move";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var todoEnteries = this.props.enteries;
    var listItems = todoEnteries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}




// import React from "react";
// import FlipMove from "react-flip-move";

// const Todo = props => {
//   return (
//     <div
//       className={`item${props.item.done ? " done" : ``}`}
//       onClick={() => props.toggleDone(props.item.id)}
//     >
//       <p>{props.item.task}</p>
//     </div>
//   );
// };

// export default Todo;