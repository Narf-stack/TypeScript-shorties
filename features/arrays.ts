const carMakers : string[] = ['ford', 'toyota', 'chevy'];
const dates : Date[] = [new Date(), new Date()];


// 2 dimensionals array
// => const carsByMake = [["f150"], ["ferrari"]], an array that cointains arrays of strings

const carsByMake: string[][] = [];


// Why typed arrays ? 
/// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

/// Prevent incompatible values
carMakers.push(100);

/// Help with 'map'
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
