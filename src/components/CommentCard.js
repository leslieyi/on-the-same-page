import { Card, Feed, } from 'semantic-ui-react'

function CommentCard({ comment }) {
	//console.log('Hi from CommentCard', comment)
	const { poster, time, text} = comment

	const newDate = new Date()
	const timeAgo = Math.abs(newDate - time)
	const daysAgo = timeAgo/(1000 * 3600 * 24)
	console.log("Comment card time:", {time}, "newDate:", {newDate}, "timeAgo:", {timeAgo}, "daysAgo:", {daysAgo})

	return(
		// <div style={{paddingBottom: "10px"}}>
		// 	<b>{poster}: </b>{text} 
		// 	{/* <small text-color="light-gray"> at {time}</small> */}
		// </div>
		<Feed.Event>
          	<Feed.Label image="https://i.pinimg.com/originals/49/da/b2/49dab23327cf7e9a71ef5b0b57aa3b24.png" />
          	<Feed.Content>
				<Feed.Summary style={{fontSize: "16px"}} >{poster}</Feed.Summary>
				<Feed.Date content={`${daysAgo} day ago`} />
				<Feed.Summary style={{fontWeight: "normal"}} >
					{text}
				</Feed.Summary>
          	</Feed.Content>
        </Feed.Event>
	)
}

export default CommentCard