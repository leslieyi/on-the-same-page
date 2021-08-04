import { Card, Feed, } from 'semantic-ui-react'

function CommentCard({ comment }) {
	const { poster, time, text} = comment

	const timeNow = new Date().getTime() / 1000
	const timeDisplay = parseInt((timeNow - time)/(3600 * 24))

	return(
		<Feed.Event>
          	<Feed.Label image="https://i.pinimg.com/originals/49/da/b2/49dab23327cf7e9a71ef5b0b57aa3b24.png" />
          	<Feed.Content>
				<Feed.Summary style={{fontSize: "16px"}} >{poster}</Feed.Summary>
				<Feed.Date content={`${timeDisplay} day ago`} />
				<Feed.Summary style={{fontWeight: "normal"}} >
					{text}
				</Feed.Summary>
          	</Feed.Content>
        </Feed.Event>
	)
}

export default CommentCard