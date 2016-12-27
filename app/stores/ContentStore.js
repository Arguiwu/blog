import alt from '../alt';
import ContentActions from '../actions/ContentActions';
class ContentStore {
	constructor() {
		this.bindActions(ContentActions);
		this.contentData = {};
	}
	setContentData(data) {
		this.contentData = data.data;
	}
};
export default alt.createStore(ContentStore);