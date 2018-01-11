import React from 'react';

const VideoDetail = ({video}) => {			// const video = props.video
	
	if(!video){
		return <div>Loading...</div>;
	}



	const videoId = video.id.videoId;
	const url = `https://youtube.com/embed/${videoId}`; 			// "url" + videoId;


	return(
		<div className="video-details col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src = {url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>

	)
}


export default VideoDetail;