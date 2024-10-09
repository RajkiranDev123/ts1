

//interface is an shape of an object

interface User{
    name:string,
    email:string,
    password:string,
    gender?:string
}

function abcd1(obj:User){

}

abcd1({name:"raj",email:"tt@gmail.com",password:"jhfdfsd"})


//extending interfaces

interface Admin extends User{
    admin:boolean
}

//Type Inference :TypeScript  parameters, and function return types when no explicit type annotations are provided.

function abcd2(obj:Admin){ // type inference : function abcd2(obj: Admin): void

    // obj.email
    // obj.admin
}


//merging interfaces : when two interfaces are of same name they get merged


interface i1{
    name:string
}

interface i1{
    email:string
}

function abcd3(obj:i1){ // type inference : function abcd2(obj: Admin): void

//    obj.email
//    obj.name
}


