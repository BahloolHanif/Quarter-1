function createCar(manufacturer, model, ...args) {
    // Create a car object with required properties
    const car = {
      manufacturer: manufacturer,
      model: model,
    };
  
    // Add any additional properties provided as arguments
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Example usage
  const myCar = createCar('Toyota', 'Camry', 'color', 'Blue', 'year', 2023, 'price', 25000);
  
  // Print the car object to check the stored information
  console.log(myCar);
  