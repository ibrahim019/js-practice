function getlength(a) {
  if (typeof a == "number") {
    return a.toString().length;
  }
  else{
      return a.length;
  }
}
console.log(getlength("zaira"));
