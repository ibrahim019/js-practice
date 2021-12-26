import cloneDeep from 'lodash/cloneDeep';

let obj = {a: 'a', b: 'b', c: {
  deep: 'try and copy me'
}};
let clone2 = cloneDeep(obj);
obj.c.deep="a"
console.log(clone2)