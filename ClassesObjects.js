"use strict";
console.log(86);
// class , object and constructor
class Music {
    constructor(name, artist) {
        this.name = name;
        this.artist = artist;
        if (!artist) {
            this.artist = "some artist";
        }
    }
}
let m1 = new Music("dil", "");
console.log("m1", m1);
/////////////////////////////////////////// or 
class Music1 {
    constructor(name, artist) {
        this.name = name; //
        if (!artist) {
            this.artist = "some artist";
        }
    }
    method1() {
        // this.email="yy" can 
        this.method2();
    }
    method2() {
        let r = 77; // only available to method2
        console.log("i am m2");
    }
}
let m2 = new Music1("dil", "");
m2.method1();
