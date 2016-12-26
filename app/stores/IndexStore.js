import alt from '../alt';
import IndexActions from '../actions/IndexActions';
class IndexStore {
	constructor() {
		this.bindActions(IndexActions);
		this.dataList = [];
	}
	setDataList(data) {
		this.dataList = data.data;
	}
};
export default alt.createStore(IndexStore);