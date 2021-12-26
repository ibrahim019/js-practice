var Zn = {
  fName: "Zaira",
  lNmae: "Nazir",
  age: 29,
  cities: ["SXR", "PUN", "MUM", "DEL"],
  towns: ["Sopore", "Baramulla", "Wagora"],
  chidlren: ["manal"],
  manal: {
    fName: "Manal",
    lNmae: "Bhat",
    age: 3,
    cities: ["SXR", "PUN"],
    towns: ["Sopore", "Baramulla", "Wagora"],
  },
};
var places = Zn.cities.length +Zn.towns.length;
var full = Zn.fName + " "+Zn.lNmae +" has visited " + places + " places."
console.log(Zn.manal.towns.length)
