import alt from '../alt';
class IndexActions {
	constructor() {
		this.generateActions(
			'setDataList'
		);
	}
	getDataList() {
		fetch('https://cnodejs.org/api/v1/topics').then(response => response.json())
			.then(data => this.actions.setDataList(data))
			.catch(e => console.log('报错啦', e))
	}
};
export default alt.createActions(IndexActions);