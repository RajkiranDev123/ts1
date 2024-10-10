"use strict";
// Access Modifiers 
//public : access and can be changed everywhere like inside or outside the class using object or in child class
//private : only accesssible & changable inside the class or parent class
//protected : only in parent and child class
class BottleMaker {
    constructor(name) {
        this.name = name;
        this.email = "raj";
        this.hal = "plane";
    }
}
class MetalBottleMaker extends BottleMaker {
    constructor(name) {
        super(name); //invoke superclass constructor
    }
    getValue() {
        console.log(this.name);
    }
}
let b1 = new MetalBottleMaker("hilton");
console.log("b1", b1);
