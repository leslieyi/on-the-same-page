function CommentCard({ comment }) {
	//console.log('Hi from CommentCard', comment)
	const { poster, time, text} = comment
	return(
		<div style={{paddingBottom: "10px"}}>
			<b>{poster}: </b>{text} 
			{/* <small text-color="light-gray"> at {time}</small> */}
		</div>
	)
}

export default CommentCard