import React, { Component } from 'react';
import SlideTimeline from '../timeline/SlideTimeline';
import Caption from '../caption/Caption';


class SnippetSlide extends Component {
	constructor(props){
		super(props);
      		this.state={
      			"headerData":{title: "title here", "desc": "discription"}

      	}	
	}

render(){

	return(
	<div>
		<div className="SnippetSlide">
			<img src={this.props.image} />
		</div>
		<div className="authorData">
			<img src={this.props.profilePic} />
		</div>
		<SlideTimeline time={10} />
		<Caption data={this.state.headerData} />
	</div>
		);
	}
}

export default SnippetSlide;