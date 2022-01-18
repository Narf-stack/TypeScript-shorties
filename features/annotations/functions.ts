const add = (a: number, b: number): number => {
    return a + b;
};
  
/// arrow function
const subtract = (a: number, b: number): number => {
    return a - b;
};

/// name function
function divide(a: number, b: number): number {
    return a / b;
}

/// anonymous function assign to a variable 
const multiply = function(a: number, b: number): number {
    return a * b;
};


// Void & Never
const logger = (message: string): void => {
    console.log(message);
};

// const throwError = (message: string): never  => {
//     throw new Error(message);
// }; 
const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};


const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

//destructuring
const logWeather = ({
    date,
    weather
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
  