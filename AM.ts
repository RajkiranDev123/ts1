// Access Modifiers 
//public : access and can be changed everywhere like inside or outside the class using object or in child class
//private : only accesssible & changable inside the class or parent class
//protected : only in parent and child class

class BottleMaker{
    protected protectedbottle:string="raj"
    private privatebottle:string="plane"
    constructor(public publicbottle:string){//declared and also initialized //public publicbottle:string

    }
}

class MetalBottleMaker extends BottleMaker{//subclass
    constructor( publicbottle:string){//only declared : publicbottle:string
        super(publicbottle)//invoke superclass constructor
    }
    getValue(){
        console.log(this.publicbottle)
        console.log(this.protectedbottle)
        // console.log(this.privatebottle)  // cant do it


    }
}
let b1=new MetalBottleMaker("hilton")
console.log("b1",b1)
b1.publicbottle="56" //yes you can do it : everywhere
// b1.protectedbottle  //cant do it
// b1.privatebottle    //only within class