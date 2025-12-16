console.log("Helloo!");
console.log("Helloo!");
const pet = {
  species: 'Dog', 
  name: 'bud', 
  age: 3
};

pet["true"]= "hello";
console.log(pet["true"]);





let myTri = {
  a:5,
  b:12,
  getArea: function(){
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function(){
    return Math.sqrt((this.a ** 2) + (this.b ** 2));    
  },
};