import { Card } from 'semantic-ui-react'
import { useState } from 'react'
import CardMemberButton from './CardMemberButton'


const ClubFormCard = ({ clubsData, setClubsData }) => {
	const [formData, setFormData] = useState({
        name: "",
        location: ""
    })
	const [formMembers, setFormMembers] = useState(['Jason Jaycesunderson'])

	//allUsers is hard-coded for now because we won't be adding new users in this project, so we don't need it to be dynamic at the moment. Once we learn React, though, and know how to work with an actual backend, this data would come from our actual user list dynamically. 
	const allUsers = [{name: 'Alec Magnet', id: '1'}, {name: 'Mari Taksa', id: '2'}, {name: 'Yearim Yi', id: '3'}]
	
	const userButtons = allUsers.map((user) => <CardMemberButton 
		name={user.name} 
		key={user.id} 
		formMembers={formMembers} 
		manageAddMemberClick={manageAddMemberClick} 
		manageRemoveMemberClick={manageRemoveMemberClick} 
	/>)

    function manageFormData(e){
        let name = e.target.name
        let value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }

	function manageAddMemberClick(e) {
		e.preventDefault()
		let newFormMembers = [...formMembers, e.target.value]
		setFormMembers(newFormMembers)
	}

	function manageRemoveMemberClick(e) {
		e.preventDefault()
		let newFormMembers = formMembers.filter((member) => member !== e.target.value)
		setFormMembers(newFormMembers)
	}

	function handleSubmit(e) {
        e.preventDefault()
		console.log("handleSubmit", e)
		fetch("http://localhost:3001/bookClubs", {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: formData.name,
				location: formData.location,
				members: formMembers,
				comments: []
			}),
		})
			.then(r => r.json())
			.then(data => {
				setClubsData([...clubsData, data])
				setFormData({
					name: "",
					location: ""
					})
				setFormMembers(['Jason Jaycesunderson'])
			})
	}

	//I added all this in-line style on the Card.Headers because Semantic UI overrode the CSS in index.css somehow
	return (
		<Card style={{backgroundColor: "#fff5e6"}} >
			<Card.Content>
				<Card.Header style={{fontSize: "24px", paddingTop: "6px"}} >Add a New Club</Card.Header>
			</Card.Content>
			<Card.Content>
				<form onSubmit={handleSubmit} >
					<Card.Header style={{fontSize: "16px", fontWeight: "bold", paddingBottom: "3px"}}>Name</Card.Header>
					<input 
						type="text" 
						name="name" 
						placeholder="Enter club name..." 
						value={formData.name}
						onChange={manageFormData}
					></input>
					<div style={{padding: "9px"}}/>
					<Card.Header style={{fontSize: "16px", fontWeight: "bold", paddingBottom: "3px"}}>Location</Card.Header>
					<input 
						type="text" 
						name="location" 
						placeholder="Enter location..." 
						value={formData.location}
						onChange={manageFormData}
						></input>
					<div style={{padding: "9px"}}/>
					<Card.Header style={{fontSize: "16px", fontWeight: "bold", paddingBottom: "3px"}}>Members</Card.Header>
					<div>{userButtons}</div>
					<div style={{padding: "10px"}}/>
					<button style={{fontSize: "16px", fontWeight: "bold", padding: "5px"}}>Submit</button>
				</form>
			</Card.Content>
		</Card>
	)
}

export default ClubFormCard