console.log(process.argv);
// [ '/usr/local/bin/node', '/var/www/html/ak/njs/process/process.js' ]

console.log(process.argv[1]);
// /var/www/html/ak/njs/process/process.js

console.log(process.env.LOGNAME);
// amirkhan

console.log(process.pid);
// 48885

console.log(process.cwd());
// /var/www/html/ak/njs/process

console.log(process.memoryUsage());
// {
//     rss: 48496640,
//     heapTotal: 6029312,
//     heapUsed: 4633560,
//     external: 1714711,
//     arrayBuffers: 11617
//   }


console.log(process.uptime());
// 0.124794073

process.on('exit', (code) => {
    console.log(`About to exit with code ${code}`);
})

process.exit(500);
// About to exit with code 500