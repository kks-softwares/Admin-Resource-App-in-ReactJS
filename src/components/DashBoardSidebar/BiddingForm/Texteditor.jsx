import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './BiddingFormDashboard.css'
export class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ text: value });
    this.props.setDescription1(value);
  }
  render() {
    return (
      <div>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          style={{
            width: this.props.width,
            height: "18vw",
            marginBottom: "2vw",
          }}
        />
      </div>
    );
  }
}
