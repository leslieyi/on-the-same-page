import { Card } from 'semantic-ui-react'
import { useState } from 'react'
//import CardMemberButton from './CardMemberButton'


const ClubFormCard = () => {
	const [ formData, setFormData ] = useState({
        name: "",
        location: ""
    })

	const [ formMembers, setFormMembers ] = useState(['Jason Jaycesunderson'])

	const allUsers = [{name: 'Alec Magnet', id: '1'}, {name: 'Mari Taksa', id: '2'}, {name: 'Yearim Yi', id: '3'}]
	//const userButtons = allUsers.map((user) => <CardMemberButton name={user.name} key={user.id} />)

    function manageFormData(e){
        let name = e.target.name
        let value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

	function manageAddMemberClick(e) {
		console.log("hi")
	}

	function manageRemoveMemberClick(e) {
		console.log("hi")
	}

	return (
		<Card style={{backgroundColor: "#fffae6"}} >
			<Card.Content>
				<Card.Header>Add a New Club</Card.Header>
			</Card.Content>
			<Card.Content>
				<form>
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
					<Card.Header>Members</Card.Header>
					<input type="text" name="members" placeholder="Enter members..." ></input>
					<div style={{padding: "10px"}}/>
					<button>Submit</button>
				</form>
			</Card.Content>
		</Card>
	)
}

export default ClubFormCard