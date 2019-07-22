import React,{Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      this.refs.itemName.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;
      
      if(newItemValue) {
        this.props.addItem({newItemValue});
        this.refs.form.reset();
      }
    }
    render () {
      return (
        <div style={{margin: "3px"}}>
          <form ref="form" onSubmit={this.onSubmit} className="form-inline" style={{margin: "3px"}}>
            <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
            <button type="submit" className="btn btn-default">Add</button>
          </form>
          <div className="text-center">
            <button type="button" onClick={this.props.addAsyncItem} className="btn btn-default">Add Async</button>
          </div>
        </div>
      );   
    }
  }

  export default TodoForm;