import { Card, Feed, Image, Button } from 'semantic-ui-react'
import CommentCard from "./CommentCard"


function ClubCard({ club }) {
	const { name, location, members, comments } = club

	//const membersRender = members.map((member, index) => <MembersList key={index} member={member} />)
	
	const commentsRender = comments.map((comment, index) => <CommentCard key={index} comment={comment} />)

	return (
		<Card>
			<Card.Content>
				{/* <Image
				floated='right'
				size='mini'
				src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
				/> */}
				<Card.Header>{name}</Card.Header>
			</Card.Content>
			<Card.Content>
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
			{/* <Card.Content extra>
				<div className='ui two buttons'>
				<Button basic color='green'>
					Approve
				</Button>
				<Button basic color='red'>
					Decline
				</Button>
				</div>
			</Card.Content> */}
		</Card>
	)
}

export default ClubCard