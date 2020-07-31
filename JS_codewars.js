var CURRENCY = ["USD", "EUR", "SHF", 410, 500]
var Switzerland = CURRENCY [2]
console.log (Switzerland)
CURRENCY [0] = "GBP"
console.log (CURRENCY)
console.log (typeof (CURRENCY))
console.log (CURRENCY.length)
console.log (CURRENCY.sort())
var last = CURRENCY[CURRENCY.length -1];
console.log (last)
for (let i = 0; i < CURRENCY.length; i++) {
    console.log ( CURRENCY[i] );
}
CURRENCY.push (430);
console.log (CURRENCY)
console.log (CURRENCY.toString ())
console.log(CURRENCY.join('*'))
console.log (CURRENCY.pop())
CURRENCY.push ("USD");
console.log (CURRENCY)
console.log (CURRENCY.shift());
console.log (CURRENCY)
CURRENCY.unshift('RUB');
console.log (CURRENCY)
delete CURRENCY [0];
console.log (CURRENCY)
CURRENCY.splice(3, 0, "JPY", 380);
console.log (CURRENCY)
CURRENCY.splice(3, 2);
console.log (CURRENCY)




