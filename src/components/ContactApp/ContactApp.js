import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import ContactList from '../ContactList/ContactList';

class ContactApp extends Component{
	constructor(){
		super();
		this.state={
				filterText: ''
			};
	}
	
	render(){
		return (
			<div id="contact-container">	
				<SearchBar filterText={this.state.filterText}/> 
				<ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
			</div>
		);
	}

}
ContactApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
}
export default ContactApp;