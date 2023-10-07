interface mylaptop{
    brand:string,
    price:number,
    setclassproperties(a:string,b:number):void,
    funcmylaptop():void
}
class laptop implements mylaptop{
    brand:string="any"
    price:number=0
// constructor(a:string,b:number){
//     this.brand=a
//     this.price=b
// }
    setclassproperties(a:string,b:number):void{
        this.brand=a
        this.price=b
    }
    funcmylaptop():void{
        console.log("Hello function of laptop")
    }
}
var mynewlaptop1:mylaptop=new laptop()
var mynewlaptop2:mylaptop=new laptop()
var mynewlaptop3:mylaptop=new laptop()
var mynewlaptop4:mylaptop=new laptop()
mynewlaptop1.setclassproperties("dell",10000)
mynewlaptop2.setclassproperties("HP",12000)
mynewlaptop3.setclassproperties("acer",15000)
mynewlaptop4.setclassproperties("apple",30000)
console.log(mynewlaptop1)
console.log(mynewlaptop2)
console.log(mynewlaptop3)
console.log(mynewlaptop4)


