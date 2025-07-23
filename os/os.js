import os from 'os';


console.log(os.freemem())
// 3211198464

console.log(os.homedir())
// /home/amirkhan

console.log(os.hostname())
// v7-laptop080

console.log(os.platform())
// linux

console.log(os.release())
// 6.8.0-58-generic

console.log(os.type())
// Linux

console.log(os.userInfo())
// [Object: null prototype] {
//     uid: 1001,
//     gid: 1001,
//     username: 'amirkhan',
//     homedir: '/home/amirkhan',
//     shell: '/bin/bash'
//   }

console.log(os.freemem())
// 1250906112

console.log(os.cpus())
// [
//     {
//       model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
//       speed: 2600,
//       times: {
//         user: 13522000,
//         nice: 25730,
//         sys: 3271590,
//         idle: 34647800,
//         irq: 0
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
//       speed: 2599,
//       times: {
//         user: 13222790,
//         nice: 30670,
//         sys: 3328460,
//         idle: 34781270,
//         irq: 0
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
//       speed: 2600,
//       times: {
//         user: 13438490,
//         nice: 25930,
//         sys: 3243580,
//         idle: 34785750,
//         irq: 0
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i5-6300U CPU @ 2.40GHz',
//       speed: 2600,
//       times: {
//         user: 13498270,
//         nice: 28540,
//         sys: 3294150,
//         idle: 34562000,
//         irq: 0
//       }
//     }
//   ]



