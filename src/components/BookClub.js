import CommentCard from "./CommentCard"
import MembersList from "./MembersList"

function BookClub({ club }) {
	//console.log('Hi from BookClub', club)
	const { name, location, members, comments } = club
	//console.log('Hi from BookClub', members)

	const membersRender = members.map((member) => <MembersList member={member} />)
	
	const commentsRender = comments.map((comment) => <CommentCard comment={comment} />)

	return(
		<div style={{backgroundColor: "lavender"}}>
			<h2>{name}</h2>
			<p><b>Location:</b> {location}</p>
			<p><b>Members:</b> {membersRender}</p>
			<div>
				<h3>Comments</h3>
				{commentsRender}
			</div>
		</div>
	)
}

export default BookClub