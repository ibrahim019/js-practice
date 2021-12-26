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

var z = Zn.chidlren.reduce((curr, acc) => {
  acc[0]=Zn.chidlren
}, {});
