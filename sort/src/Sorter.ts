
// No Refacto
// interface Sortable {
//     length: number;
//     compare(leftIndex: number,rightIndex: number): boolean;
//     swap(leftIndex: number,rightIndex: number): void;
// }
export abstract class Sorter {

    
    // No Refacto
    // constructor(public collection:Sortable){
    // } 
    // sort():void{
    //     const length:number = this.collection.length;
    //     for (let i=0; i < length; i++){
    //         for (let j=0;j<length-i-1;j++) {
    //             if (this.collection.compare(j,j+1)){
    //                 this.collection.swap(j,j+1)
    //             }
    //         }
    //     }
    // }

    // Refacto

    // Function, getter that TYPESCRIT promesse that will be implement in childs of the inheritance 
    abstract compare(leftIndex:number, rightIndex: number): boolean
    abstract swap(leftIndex:number, rightIndex:number): void
    abstract length:number
    
    sort():void{
        const length:number = this.length;
        for (let i=0; i < length; i++){
            for (let j=0;j<length-i-1;j++) {
                if (this.compare(j,j+1)){
                    this.swap(j,j+1)
                }
            }
        }
    }
}