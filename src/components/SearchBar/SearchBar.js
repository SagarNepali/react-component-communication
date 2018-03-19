import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component{

	render(){
		return(
			<input type='text' placeholder="Search text" value={this.props.filterText} onChange={this.handleChange.bind(this)}/>
		);
	}

	handleChange(event){
		this.props.onUserInput(event.target.value)
	}

}
SearchBar.propTypes = {
	onUserInput: PropTypes.func.isRequired,
	filterText: PropTypes.string.isRequired
}
export default SearchBar;