var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
var graphdata ;
var flowdata;
router.get('/', function(req, res, next) {
	fs.readFile('graph.txt','utf8',function(err,data){
      if(err){
         console.log(err);
      }
      else{
      		// console.log(data);
      		data =data.replace(/\\t/g, "");
      		graphdata = data.split("\n");
      		// console.log(graphdata);
      		// console.log(myarr[4]);
      		// console.log(myarr.length);
	      	fs.readFile('flow_3.txt','utf8',function(err,data){
	      		if(err){
	      			console.log(err);
	      		}
	      		else{
	      			data = data.replace(/\\t/g, "");
	      			flowdata = data.split("\n");
	      			console.log(flowdata);
	      			// console.log(mydata[2]);
	      			// console.log(mydata.length);
	      		    console.log(flowdata[4],graphdata[4]);
		            res.render('index', { title: 'Express' , fd : flowdata , gd : graphdata }); 
			    
	      		}
	      	});	
      }
       // res.render('index', { title: 'Express' }); 
  	});

});

module.exports = router;
