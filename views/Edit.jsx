const React = require('react');

class Edit extends React.Component{
  render() {
    return (
      <div>      
      <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
            Name: <input type = "text" name = "name" /><br/>
            Image URL: <input type = "text" name = "img" /><br/>
            <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;