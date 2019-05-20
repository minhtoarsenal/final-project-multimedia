const fs = require('fs');
const util = require('util');
const express = require('express')
const multer = require('multer');
const upload = multer();
const path = require('path');

const port = 8001;
const app = express();

app.get('/', function(req, res){
  console.log(util.inspect(req.headers, showHidden=false, depth=0));

  var stat = fs.statSync(file);
  if (!stat.isFile()) return;

  var start = 0;
  var end = 0;
  var range = req.header('Range');
  if (range != null) {
    start = parseInt(range.slice(range.indexOf('bytes=')+6,
      range.indexOf('-')));
    end = parseInt(range.slice(range.indexOf('-')+1,
      range.length));
  }
  if (isNaN(end) || end == 0) end = stat.size-1;

  if (start > end) return;

  console.log('Browser requested bytes from ' + start + ' to ' +
    end + ' of file ' + file);


  res.writeHead(206, { // NOTE: a partial http response
    // 'Date':date.toUTCString(),
    'Connection':'close',
    // 'Cache-Control':'private',
    // 'Content-Type':'video/webm',
    // 'Content-Length':end - start,
    'Content-Range':'bytes '+start+'-'+end+'/'+stat.size,
    // 'Accept-Ranges':'bytes',
    // 'Server':'CustomStreamer/0.0.1',
    'Transfer-Encoding':'chunked'
    });

  var stream = fs.createReadStream(file,
    { flags: 'r', start: start, end: end});
  stream.pipe(res);
});

app.post('/upload',upload.any(), (req, res) => {

  if(req.files){
      let user_upload = path.join(__dirname, '/uploads/', req.files[0].originalname);

      fs.writeFile(user_upload, req.files[0].buffer, (err) => {
        if (err) {
            console.log('Error: ', err);
            res.status(500).send('An error occurred: ' + err.message);
        } else {
            const videoList = [];
            fs.readdir("./uploads", function(err, items) {
              for (var i=0; i<items.length; i++) {
                  videoList.push(items[i]);

                  if(i == items.length - 1) {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
                    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({
                      videoList: videoList
                    }))
                  }
              }
            });
            
        }
    });
  }else{
      res.json({
          uploaded : false
      })
  }
});

app.listen(port);

process.on('uncaughtException', function(err) {
  console.log(err);
});