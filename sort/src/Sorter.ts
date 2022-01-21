export class Sorter {
    constructor(public collection){
    }

    sort():void{
        const length:number = this.collection.length;
        for (let i=0; i < length; i++){
            for (let j=0;j<length-i-1;j++) {
                if (this.collection[j] > this.collection[i+1]){
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j+1];
                    this.collection[j+1] = leftHand
                }
            }
        }
    }
}