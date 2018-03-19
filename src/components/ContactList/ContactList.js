import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContactItem from "../ContactItem/ContactItem";


class ContactList extends Component{

	render(){

	let filteredContacts = this.props.contacts.filter(
							(contact) => contact.name.indexOf(this.props.filterText) !== -1  ||  contact.email.indexOf(this.props.filterText) !== -1
							);
		return(
			<ul>
				{filteredContacts.map(
					(contact) => <ContactItem 	key={contact.email} 
												name={contact.name}
												email={contact.email} />
				)}
			</ul>
		);
	}
}

export default ContactList;