const fs = require('fs');

exports.uploadFile = (req, res)=>{
    
    var tmp_path = req.file.path;
    var target_path = './public/' + req.file.originalname;

    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);

    src.on('end', function() { res.send('complete'); });
    src.on('error', function(err) { res.send('error'); });

    fs.unlink(tmp_path, () => console.log("Temp file deleted"));

}
