import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<div className="flex-body">
				<Navbar history={ this.props.history } />
				{ this.props.children }
				<Footer />
			</div>
		);
	}
};
export default App;