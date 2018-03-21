import React from 'react';

class AddVideo extends React.Component {

  state = {
    title: null,
    description: null,
    displayDate: null,
    expiryDate: null,
    textarea: null
  }

  sendInfo = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  sendingTitle = e => {
    this.setState({
    title: e.target.value
    })
  }

  sendingDesc = e => {
    this.setState({
    description: e.target.value
    })
  }

sendingDateStart = e => {
    this.setState({
    displayDate: e.target.value
    })
  }

sendingDateEnd = e => {
    this.setState({
    expiryDate: e.target.value
    })
  }
sendingVideo = e => {
    this.setState({
    textarea: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.sendInfo} className="AddVideo">
        <label className="edit-title">Title</label>
        <input onChange={this.sendingTitle} type="text"/>
        <label className="edit-desc">Description</label>
        <input onChange={this.sendingDesc} type="text"/>
        <label className="edit-date">Display Date</label>
        <input onChange={this.sendingTitleDateStart} type="date"/>
        <label className="edit-date">Expiry Date</label>
        <input onChange={this.sendingDateEnd} type="date"/>
        <label>Youtube Embed Code</label>
        <input className="video-url" onChange={this.sendingVideo}/>
        <a href="#">Delete this Video</a>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddVideo;