const fs = require('fs');
fs.weiteFileSync('./.env', `API=${process.env.API}\n`)