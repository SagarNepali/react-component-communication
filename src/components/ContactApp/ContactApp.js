import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import ContactList from '../ContactList/ContactList';


// Main (stateful) component.
// Renders a SearchBar and a ContactList
// Passes down filterText state and handleUserInput callback as props
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
				<SearchBar 
							filterText={this.state.filterText} 
							onUserInput={this.handleUserInput.bind(this)}/> 
				<ContactList 
							contacts={this.props.contacts} 
							filterText={this.state.filterText}/>
			</div>
		);
	}

	handleUserInput(searchTerm){
		this.setState({filterText:searchTerm})
	}
}
ContactApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object),
}
export default ContactApp;