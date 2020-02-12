import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Yorumlar: [],
      IsLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(json => this.setState({ Yorumlar: json, Isloaded: true }));
  }

  render() {
    if (this.state.IsLoaded) {
      console.log("deneme", this.state.Yorumlar[0].name);
    }

    return (
      <div>
        {this.state.Yorumlar.map(comm => (
          <div>{comm.name}</div>
        ))}
      </div>
    );
  }
}

export default Comments;
