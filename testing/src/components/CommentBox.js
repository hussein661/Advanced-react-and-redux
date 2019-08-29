import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import requireAuth from '../components/requireAuth'

class CommentBox extends Component {
  state = { comment: "", comments: [] };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ol type="1">
            {this.state.comments.map((cmt, idx) => (
              <li key={idx}>{cmt}</li>
            ))}
          </ol>
          <h4>add a comment</h4>
          <textarea
            name="comment"
            onChange={this.handleChange}
            value={this.state.comment}
            style={styles.textarea}
          />
          <div>
            <button type="submit">Submit comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}


export default connect(
  null,
  actions
)(requireAuth(CommentBox))

const styles = {
  textarea: {
    width: "300px",
    height: "50px"
  }
};
