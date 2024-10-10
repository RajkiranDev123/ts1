console.log(86)

// class , object and constructor

class Music{
    constructor(public name:string, public artist :string){// public name:string, : declare and initialize at once
        if(!artist){
            this.artist="some artist"
        }
    }
}

let m1=new Music("dil","")

console.log("m1",m1)
/////////////////////////////////////////// or 




class Music1{

    // let t=8 class properties are naturally restricted to class

    public name //declare
    public artist
    constructor(name:string, artist :string){
        this.name=name //

        if(!artist){
            this.artist="some artist"
        }
    }

    method1(){
        // this.email="yy" can 
        this.method2()

    }
    method2(){
        let r=77 // only available to method2
console.log("i am m2")
    }
}

let m2=new Music1("dil","")
m2.method1()

