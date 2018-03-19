import React from 'react';
import ReactDOM from 'react-dom';
import ContactApp from '../src/components/ContactApp/ContactApp';
import './style.css';


let contactList = [
	{
		name: "Sagar",
		email:"mail@1.com"
	},
	{
		name: "Sagar2",
		email:"mail@12.com"
	},
	
	
];

ReactDOM.render(<ContactApp contacts= {contactList}/>, document.getElementById('root'));


