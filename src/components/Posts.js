import React, { Component } from "react";
import "../Posts.css";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Postlar: [],
      pageThis: 1
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(result =>
        result.map(item => {
          const commentSection = [];
          fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(comments => {
              comments.map(comm => {
                if (comm.postId === item.id) {
                  commentSection.push(comm);
                }
              });

              item.comments = commentSection;

              this.setState({
                Postlar: result,
                isLoaded: true
              });
            });
        })
      );
  }

  pagination = islem => {
    if (islem === "++") {
      this.setState({
        pageThis: this.state.pageThis + 1
      });
    } else {
      this.setState({
        pageThis: this.state.pageThis - 1
      });
    }
  };

  render() {
    const pageCount = Math.ceil(this.state.Postlar.length / 10);
    const { pageThis } = this.state;
    return (
      <>
        {this.state.isLoaded && (
          <>
            <div className="wrapper">
              {this.state.Postlar.map((item, i) => {
                if ((pageThis - 1) * 5 <= i && i < pageThis * 5) {
                  return <Post data={item} />;
                }
              })}

              <div className="pagination">
                <button
                  className="example_a"
                  onClick={() => {
                    this.pagination();
                  }}
                  disabled={this.state.pageThis === 1}
                >
                  previous
                </button>
                <span>{this.state.pageThis}</span>
                <button
                  className="example_a"
                  onClick={() => {
                    this.pagination("++");
                  }}
                  disabled={this.state.pageThis === pageCount}
                >
                  next
                </button>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Posts;
