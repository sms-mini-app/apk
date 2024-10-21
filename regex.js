var text = '{thanhtoan1|thanhtoan2|thanhtoan3}.   vui vui xxx';
var regex =/\{(.*?)\}/g;
console.log(text.match(regex));


// replace 

// function escapeRegExp(string) {
//     return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
// }
// console.log(escapeRegExp("[thanh toan1|12345]"));
// const text = "[thanh toan1|12345]fg bhhbbb b. [thanh toan1|12345]"
// console.log(text.replace(new RegExp(escapeRegExp("[thanh toan1|12345]"), 'g'), "thanh toan1"));