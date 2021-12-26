function verify(ptr, yes, no) {
	for(let str of yes){
  	if(!ptr.test(str)) console.log(`Failure to match '${str}'`)
  }
  for(let str of no) {
	if(ptr.test(str)) console.log(`Unexpected match for '${str}'`)
  }
}
//1 --> cat, car
const ptr1 = /\b(car|cat)s?\b/;
//2 --> prop, pop
const ptr2 = /pr??op/;
//3 --> ferret, ferry, و ferrari
const ptr3 = /\bferr(ari|et|y)\b/;
//4 --> ious
const ptr4 = /\b(\w+?ious)\b/;
//5 --> .|;|,|.
const ptr5 = /\s[.;,:]/;
//6 --> word > 6 char
const ptr6 = /\w{7,}/;
//7 --> without e or E
const ptr7 = /\b[^\We]+\b/i;
verify(ptr1,
       ["my car", "bad cats"],
       ["camper", "high art"]);
verify(ptr2,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);       
verify(ptr3,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(ptr4,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);
verify(ptr5,
       ["bad punctuation ."],
       ["escape the period"]);

verify(ptr6,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);
verify(ptr7,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);
