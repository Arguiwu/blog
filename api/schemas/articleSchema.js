const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var articleSchema = new Schema({
	id
	title,
	url,
	content,
	tag,
	category,
	date,
	share,
	summary
});