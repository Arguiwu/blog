import alt from '../alt';

class NavbarActions {
	constructor() {
		this.generateActions(
			'setPathname'
		);
	}
	getPathname() {
		this.actions.setPathname(window.location.pathname);
	}
};
export default alt.createActions(NavbarActions);