export class NumbersCollection{
    data: number[] 

    constructor(data: number [] ){
        this.data = data;
    }
    // constructor(public data: number [] ){    }

    get length():number {  
        // get = getter, we can call it like it is a property and not a method
        // new NumbersCollection.length  instead of new NumbersCollection.length()
        return this.data.length
    }

    compare(leftIndex:number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex:number, rightIndex:number): void{
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand
    }
}