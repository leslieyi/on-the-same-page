import { Feed, } from 'semantic-ui-react'

function CommentCard({ comment }) {
	const { poster, time, text} = comment

	const timeNow = new Date().getTime() / 1000
	const timeDiff = parseInt((timeNow - time))
	const timeDisplayHours = parseInt(timeDiff/3600)
	const timeDisplayDays = parseInt(timeDiff/(3600 * 24))

	const timeToDisplay = () => {
		if (timeDiff < 3600) {
			return('just now')
		} else if (timeDiff < 7200) {
			return(`${timeDisplayHours} hour ago`)
		} else if (timeDiff < 86400) {
			return(`${timeDisplayHours} hours ago`)
		} else if (timeDiff < 172800) {
			return(`${timeDisplayDays} day ago`)
		} else {
			return(`${timeDisplayDays} days ago`)
		}
	}

	return(
		<Feed.Event>
          	<Feed.Label image="https://i.pinimg.com/originals/49/da/b2/49dab23327cf7e9a71ef5b0b57aa3b24.png" />
          	<Feed.Content>
				<Feed.Summary style={{fontSize: "16px"}} >{poster}</Feed.Summary>
				<Feed.Date content={timeToDisplay()} />
				<Feed.Summary style={{fontWeight: "normal"}} >
					{text}
				</Feed.Summary>
          	</Feed.Content>
        </Feed.Event>
	)
}

export default CommentCard