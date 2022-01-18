const profile = {
    name: 'alex',
    age: 20,
    coords: {
      lat: 0,
      lng: 15
    },
    setAge(age: number): void {
      this.age = age;
    }
};

// if we are using the destructing , we have to write out the expecting 
// structure of profile on the right side

const { age, name }: { age: number; name: string } = profile;

const {
    coords: { lat, lng }
  }: { coords: { lat: number; lng: number } } = profile;
  