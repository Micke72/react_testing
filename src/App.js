import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
	id: 1,
	name: 'Scott',
	phone: '555 333 5555'
},{
	id: 2,
	name: 'Karolina',
	phone: '111 333 5555'
},{
	id: 3,
	name: 'Micke',
	phone: '222 333 5555'
},{
	id: 4,
	name: 'John',
	phone: '666 333 5555'
},{
	id: 5,
	name: 'Die Hard',
	phone: '777 333 5555'
}
]


class App extends React.Component {
	render() {
		return (
			<div> 
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		)
	}
}

render(<App contacts={contacts} />, document.getElementById('app'));