"use strict";
console.log("hello world");
class laptop {
    constructor() {
        this.brand = "any";
        this.price = 0;
    }
    // constructor(a:string,b:number){
    //     this.brand=a
    //     this.price=b
    // }
    setclassproperties(a, b) {
        this.brand = a;
        this.price = b;
    }
    funcmylaptop() {
        console.log("Hello function of laptop");
    }
}
var mynewlaptop1 = new laptop();
var mynewlaptop2 = new laptop();
var mynewlaptop3 = new laptop();
var mynewlaptop4 = new laptop();
mynewlaptop1.setclassproperties("dell", 10000);
mynewlaptop2.setclassproperties("HP", 12000);
mynewlaptop3.setclassproperties("acer", 15000);
mynewlaptop4.setclassproperties("apple", 30000);
console.log(mynewlaptop1);
console.log(mynewlaptop2);
console.log(mynewlaptop3);
console.log(mynewlaptop4);
