
const CardMemberButton = ( { name, formMembers, manageAddMemberClick, manageRemoveMemberClick } ) => {
	if (formMembers.includes(name)) {
		return (
			<button value={name} onClick={manageRemoveMemberClick} >Remove {name}</button>
		)
	} else {
		return (
			<button value={name} onClick={manageAddMemberClick} >Add {name}</button>
		)
	}
}

export default CardMemberButton