const Tool = {};
Tool.formatDate = function(str) {
	var date = new Date(str);
	var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	return dateString;
};
export default Tool;