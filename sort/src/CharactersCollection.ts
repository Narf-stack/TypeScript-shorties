
// No refacto
// export class CharactersCollection {
//     data: string 

//     constructor(data: string ){
//         this.data = data;
//     }

//     get length():number {  
//         // get = getter, we can call it like it is a property and not a method
//         // new NumbersCollection.length  instead of new NumbersCollection.length()
//         return this.data.length
//     }

//     compare(leftIndex:number, rightIndex: number): boolean {

//         return (
//             this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
//         )
//     }

//     swap(leftIndex:number, rightIndex:number): void{
//         const characters = this.data.split('');
//         const leftHand = characters[leftIndex];
//         characters[leftIndex] = characters[rightIndex];
//         characters[rightIndex] = leftHand;

//         this.data = characters.join('')
//     }
// }



// Refacto
import { Sorter } from "./Sorter";


export class CharactersCollection extends Sorter{

    constructor(public data: string ){
        super()
    }

    get length():number {  
        // get = getter, we can call it like it is a property and not a method
        // new NumbersCollection.length  instead of new NumbersCollection.length()
        return this.data.length
    }

    compare(leftIndex:number, rightIndex: number): boolean {

        return (
            this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
        )
    }

    swap(leftIndex:number, rightIndex:number): void{
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('')
    }
}