import alt from '../alt';
class ContentActions {
	constructor() {
		this.generateActions(
			"setContentData"
		);
	}
	getDataList(id) {
		fetch('https://cnodejs.org/api/v1/topic/' + id).then(response => response.json())
			.then(data => this.actions.setContentData(data))
			.catch(e => console.log('报错啦', e))
	}
}
export default alt.createActions(ContentActions);