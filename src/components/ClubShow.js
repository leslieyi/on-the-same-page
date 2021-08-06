import { useParams, useHistory } from "react-router-dom";
import { Card, Feed } from 'semantic-ui-react'
import CommentCard from "./CommentCard"
import "semantic-ui-css/semantic.min.css";


const ClubShow = ({ clubsData }) => {
	const params = useParams();
	const history = useHistory();
	
	const club = clubsData.find((club) => club.id === parseInt(params.ID));

	const commentsMap = () => club ? (club.comments.map((comment, index) => <CommentCard key={index} comment={comment} />)) : null
	const commentsRender = commentsMap()

	const handleBackClick = () => {
		history.goBack()
	}
	
	console.log("hi from ClubShow", clubsData, "params", params, params.ID, "club", club, "history", history, "is this working?")

	return club ? (
		<div className="ui centered card" style={{alignContent: "center"}} >
				<Card style={{backgroundColor: "#fffae6"}} >
					<Card.Content>
						<Card.Header>{club.name}</Card.Header>
						<Card.Meta>Location: {club.location}</Card.Meta>
						<Card.Description>
							Members: {club.members.join(", ")}
						</Card.Description>
					</Card.Content>
					<Card.Content>
						<Card.Header>Comments</Card.Header>
						<Feed>
							{commentsRender}
						</Feed>
						{/* <Link to={url}>
							See More
						</Link> */}
						<button onClick={handleBackClick} >Go Back</button>
					</Card.Content>
				</Card>
		</div>
	) : null
}

export default ClubShow