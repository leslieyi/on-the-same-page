import CommentCard from "./CommentCard"
import MembersList from "./MembersList"

function BookClub({ club }) {
	//console.log('Hi from BookClub', club)
	const { name, location, members, comments } = club
	//console.log('Hi from BookClub', members)

	const membersRender = members.map((member, index) => <MembersList key={index} member={member} />)
	
	const commentsRender = comments.map((comment, index) => <CommentCard key={index} comment={comment} />)

	return(
		<div style={{padding: "5px"}}>
			<div style={{backgroundColor: "tan", border: "1px solid black", padding: "5px"}}>
				<h2>{name}</h2>
				<p><b>Location:</b> {location}</p>
				<p><b>Members:</b> {membersRender}</p>
				<div>
					<h3>Comments</h3>
					{commentsRender}
				</div>
			</div>
		</div>
	)
}

export default BookClub