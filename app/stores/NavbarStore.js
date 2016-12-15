import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
	constructor() {
		this.bindActions(NavbarActions);
		this.pathname = '/';
	}
	setPathname(pathname) {
		this.pathname = pathname;
	}
};
export default alt.createStore(NavbarStore);