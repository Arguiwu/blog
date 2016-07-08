var _ = require('underscore')._;	//backbone依赖
var Backbone = require('backbone');	//model
var uuid = require('node-uuid');  // 使用 uuid.v1(); 基于时间的  v4() (随机) id
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
			console.log(q)
		},
		save:function(where, callback){
			if(typeof(where) == 'function'){
				callback = where;
				where = null;
			}
			if(this.tableName){
				var tableName = this.tableName;
			}else{
				var tableName = this.attributes.tableName;
			}
			if(where){
				var id = null;
				if(this.has('id')){
					id = this.get('id');
					delete this.attributes.id;
				}
				var q = "UPDATE" + tableName + "SET" + connection.escape(this.attributes) + "WHERE" + where;
				if(id){
					this.set('id',id);
				}
				var check = "SELECT * FROM" + tableName + "WHERE" + where;
				connection.query(check,function(err,result,fields){
					if(result[0]){
						conditions.query(q,function(err,result){
							if(callback){
								callback(err,result);
							}
						})
					}else{
						err="未找到记录";
						callback(err, result);
					}
				})
			}else{
				if(this.has('id')){
					var id = this.get('id');
					delete this.attributes.id;
					var q = "UPDATE "+tableName+" SET "+ connection.escape(this.attributes)+" WHERE id="+connection.escape(id);
					this.set('id', id);
					var check = "SELECT * FROM "+tableName+" WHERE id="+connection.escape(id);
					connection.query(check,function(err,result,fields){
						if(result[0]){
							conditions.query(q,function(err,result){
								if(callback){
									callback(err,result);
								}
							})
						}else{
							err="未找到记录";
							callback(err, result);
						}
					})
				}else{
					this.attributes.id = uuid.v1();
					var q = "INSERT INTO "+tableName+" SET "+ connection.escape(this.attributes);
					connection.query(q, function(err, result) {
						if(callback){
							callback(err, result);
						}
					});
				}
			}
		}
	});
	return SQLModel;
}
exports.createConnection = createConnection;