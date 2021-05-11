const {join} = require("path")
module.exports = {
	entry:"./src/index.js",
	output:{
		filename:"main.js",
		path:join(__dirname,"/dist")
	},
	module:{
		rules:[{
			test:/\.s[ac]ss$/i,
			use:["style-loader","css-loader",{
				loader:"sass-loader",
				options:{
					implementation:require("sass")
				}
			}]
		
		    }	
		]
	}
}
