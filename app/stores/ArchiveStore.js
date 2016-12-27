import alt from '../alt';
import ArchiveActions from '../actions/ArchiveActions';
class ArchiveStore {
	constructor() {
		this.bindActions(ArchiveActions);
		this.dataList = [];
	}
	setDataList(data) {
		this.dataList = data.data;
	}
};
export default alt.createStore(ArchiveStore);