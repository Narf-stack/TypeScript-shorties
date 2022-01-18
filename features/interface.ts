// Once an object has the requested interface parameters, it can use the interface.
// Even if it has more properties than the interface.
// We can use a single interface to describe the shape/differents properties 
// of very different object.

interface Reportable {
    summary(): string;
  }
  
  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };
  
  const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
      return `My drink has ${this.sugar} grams of sugar`;
    },
  };
  
  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };
  
  printSummary(oldCivic);
  printSummary(drink);
  