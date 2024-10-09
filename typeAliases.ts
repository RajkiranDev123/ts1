console.log(5764342)


//interfaces are similar to  type aliases except they only apply to object types

//type aliases allows defining with a  custom name (an alias)

//no merging in type a;iases when they are of the same name


//can be used for primitives like string or more complex types such as objects and arrays

type carYear=number

type arg1 =string|null

function p1(ar:arg1){

}
p1(null)

type r=number
// type r=string  but in interface it is merged

//intersection & (must include  both) : Intersection and Union types are one of the ways in which you can compose types.

type User1={

    name:string,
    email:string

}

type Admin1=User1 & {
    getDetails(user:User):void
}


function abc1(a:Admin1){

    // a.email

}


