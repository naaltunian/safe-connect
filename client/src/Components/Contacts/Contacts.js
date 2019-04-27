import React from 'react';
import axios from 'axios';

const Contacts = () => {
	let { contacts } = axios.get('/contacts');
	return (
		<div>
			{contacts.map(contact => {
				return <p>{contact.name}</p>;
			})}
		</div>
	);
};

export default Contacts;
