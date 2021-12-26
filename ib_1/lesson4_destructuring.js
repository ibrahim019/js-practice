const obj = {
  player: "baab",
  exp: 100,
  wizardLevel: false
}
//before we had to do:
//const player = obj.player;
//const exp = obj.exp;
//let wizardLevel = obj.wizardLevel;
//* Now we can do:
const {player , exp} = obj;
let {wizardLevel,...obn}= obj;
console.log(obn)