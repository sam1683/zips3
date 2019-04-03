/**
 * 
 * SJP
 * 
 */

let AWS = require('aws-sdk');
let JSZip = require("jszip");
let fs = require("fs");
const s3 = new AWS.S3();


exports.handler = function(event, context, callback) {
    
    
    callback(null, {"message": "Successfully executed"});
}

let changes = event.changes;
let modified = 0, removed = 0;