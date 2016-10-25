var sql = require("seriate");

var jsonfile = require("jsonfile")



//SQL Server configuration settings
var config = {
	"server": "xxxxx",
	"user":"xxxxx",
	"password":"xxxxx",
	"database": "xxxx",
};




sql.setDefaultConfig(config);




sql.execute({
	query: sql.fromFile("../sql/pullHoodStats")
}).then( function(results){

		console.log(results.length);

	 	jsonfile.writeFile("./data/hoodStats.json", results, function (err) { 
	 		console.error(err)
		})

 	
	}, function (err){
		console.log ("Something bad happened:", err);
		});

