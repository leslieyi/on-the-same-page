import { Card, Feed, Image, Button } from 'semantic-ui-react'
import CommentCard from "./CommentCard"
import { useParams, Route, useRouteMatch } from "react-router-dom"
import ClubShow from './ClubShow'


function ClubCard({ club }) {
	const { name, location, members, comments } = club
    const match = useRouteMatch();

	//const membersRender = members.map((member, index) => <MembersList key={index} member={member} />)
	
	const commentsRender = comments.map((comment, index) => <CommentCard key={index} comment={comment} />)

	return (
		<Card style={{backgroundColor: "#fffae6"}} >
			<Card.Content>
				{/* <Image
				floated='right'
				size='mini'
				src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
				/> */}
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
			</Card.Content>
			<Card.Content>
				<Route path={`${match.url}/:profileId`}>
        			<ClubShow club={club} />
      			</Route>
			</Card.Content>
		</Card>
	)
}

export default ClubCard