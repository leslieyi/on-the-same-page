import { Card, Feed } from 'semantic-ui-react'
import CommentCard from "./CommentCard"
import { Link } from "react-router-dom"
//import { useRouteMatch } from "react-router-dom"
// import ClubShow from './ClubShow' ROUTER


function ClubCard({ club }) {
	const { name, location, members, comments, id } = club
    
	//const match = useRouteMatch();
	
	const commentsRender = comments.map((comment, index) => <CommentCard key={index} comment={comment} />)
	// const url = `${match.path}/${id}`
	// const url = `http://localhost:3000/clubs/${id}`
	const url = `/clubs/${id}`

	return (
		<Card style={{backgroundColor: "#fffae6"}} >
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>Location: {location}</Card.Meta>
				<Card.Description>
					Members: {members.join(", ")}
				</Card.Description>
			</Card.Content>
			<Card.Content>
				<Card.Header>Comments</Card.Header>
				<Feed>
					{commentsRender}
				</Feed>
				<Link to={url}>
        			See More
      			</Link>
			</Card.Content>
		</Card>
	)
}

export default ClubCard