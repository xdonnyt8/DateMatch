const fs = require('fs');
const AWS = require('aws-sdk');
// Enter copied or downloaded access ID and secret key here
const ID = process.env.AWS_ACCESS_KEY;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;


module.exports = function (files, fileURL) {
    console.log(fileURL)
// read the file
// const fileContent = fs.readFileSync(files);
console.log("**************************************************")
console.log(files)
console.log("**************************************************")
// The name of the bucket that you have created
const BUCKET_NAME = "dateapppbucket";

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});


    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileURL, // File name you want to save as in S3
        Body: files,
        // ContentType: files.mimetype,
        // ContentLength: files.size,


 
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });

    return ;
}