class Boat{
    color: string = 'red'


    get formattedColour():string{
        return `this boat color is ${this.color}`
    }

    @testDecorator // apply testDecorator decorator to pilot(), thanks to the "@NameOfTheDecorator"
    pilot():void{
        console.log('swish')
    }
}

// my decorator

function testDecorator(target:any,key:string):void{ // always a target and a key
    console.log('Target:', target)
    console.log('Key:', key)
}

// Once the decorator applied, if this error appear :

// "Experimental support for decorators is a feature that is subject to change in a 
// future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' 
// to remove this warning "

// load the tsc config file ( tsc --init) and uncomment & turn experimentalDecorators 
// and emitDecoratorMetadata  to true