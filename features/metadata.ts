import 'reflect-metadata'

const smPlane = {
    color:'red'
};

Reflect.defineMetadata('note','hi there', smPlane) 

//(Metadata property, value, associate to)
// const smPlane = {
//     color:'red'
//     note:'hi there' --> invisible
// };

console.log(smPlane) // the note property will be added but invisible

const note = Reflect.getMetadata('note', smPlane)
// the note property will remains invisible in ObjectsmPlane but thanks to "getMetadata"
// we would be able to see it

console.log(`note is ${note}`) 


// add a note property with a value of 'hi there'to the smPlane color property
Reflect.defineMetadata('note','hi there', smPlane, 'color') 
const noteAdded = Reflect.getMetadata('note', smPlane, 'color')



// CLASS ------------------------------------------------------------------- CLASS



@printMetadata
class Plane{
    color: string ='red'

    // @markFunctionSm //decorator attachement
    @markFunction('Hi there this is a secret')   //decorator factory attachement
    fly():void{
        console.log('vrrrr')
    }
}

//decorator 
function markFunctionSm(target:Plane, key:string){ //; key=name of the method associated to the decorator
    Reflect.defineMetadata('secret','123', target,key) 
}

const secretSm = Reflect.getMetadata('secret', Plane.prototype, 'fly')
// console.log(`secretSm is ${secretSm}`) 

//decorator factory

function markFunction( secretInfo:string){
    return function(target:Plane, key:string){ 
        Reflect.defineMetadata('secret',secretInfo, target,key) 
    }
}

//decorator apply to the class
// when we apply a decorator to a class, type argument is of type constructor function
// here, it is constructor function of the Plane class 

function printMetadata(target:typeof Plane){ 

    //loop to go through all the diff keys of the Plane prototype
    // key = methods of the prototype in this case. Here it's only #fly
    for (let key in target.prototype){ 
        const secret = Reflect.getMetadata('secret', target.prototype, key)
        console.log(`secret from class decorator is ${secret}`)
    }
}