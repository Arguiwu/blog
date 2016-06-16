var _ = require('underscore')._;	//backbone依赖
var Backbone = require('backbone');	//model
var mysql = require('mysql');  		//连接mysql

var createConnection = function(options){
	var connection = mysql.createConnection(options);//创建一个链接
	var SQLModel = Backbone.Model.extend({
		query: function(query, callback) {
			connection.query(query, function(err, result, fields) {
				if(callback){
					callback(err, result, fields);
				}
			});	
		},
		find:function(method, conditions, callback){	// find(function(){***})
			var tableName;
			if(typeof(method) == 'function'){
				callback=method;
				method='all';
				conditions = {};
			}else if(typeof(conditions) == 'function'){		// find(method,function(){***})
				callback=conditions;
				conditions={};
			}
			if(this.tableName){	//获取table名
				tableName = this.tableName;
			}else{
				tableName = this.attributes.tableName;;
			}
			var sql = '';
			var fields = '*';
			if(conditions['fields']){
				fields = conditions['fields'];
			}
			if(conditions['where']){
				sql += " WHERE "+conditions['where'];
				if(conditions['groupDESC']){
					sql += 'DESC';
				}
			}
			if(conditions['having']){
				sql += "HAVING"+conditions['having'];
			}
			if(conditions['order']){
				sql += "ORDER BY"+conditions['order'];
				if(conditions['orderDESC']){
					sql += 'DESC';
				}
			}
			if(conditions['limit']){
				sql += 'LIMIT'+conditions['limit'];
			}
			switch(method){
				case 'all':
					var q = "SELECT "+fields+" FROM "+tableName+sql;
					connection.query(q, function(err, result, fields) {
						if(callback){
							callback(err, result, fields);
						}
					});	
					break;
				case 'count':
					var q = "SELECT COUNT(*) FROM "+tableName+sql;
					connection.query(q, function(err, result, fields) {
						if(callback){
							callback(err, result[0]['COUNT(*)'], fields);
						}
					});	
					break;
				case 'first':
					var q = "SELECT"+fields+"FROM "+tableName+sql;
					connection.query(q, function(err, result, fields) {
						if(callback){
							callback(err, result[0], fields);
						}
					});	
					break;
				case 'field':
					var q = "SELECT"+fields+"FROM "+tableName+sql;
					connection.query(q, function(err, result, fields) {
						for (var key in result[0]) break;
						if(callback){
							callback(err, result[0][key], fields);
						}
					});
					break;
			}
		}
	});
	return SQLModel;
}
exports.createConnection = createConnection;