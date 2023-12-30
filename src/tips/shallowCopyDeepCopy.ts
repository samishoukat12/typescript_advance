// Original object
const originalObject = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding'],
  };
  
  // Shallow copy using spread operator
  const shallowCopy = { ...originalObject };
  
  // Deep copy using JSON.parse and JSON.stringify
  const deepCopy = JSON.parse(JSON.stringify(originalObject));
  
  // Modify the copies
  shallowCopy.age = 31;
  shallowCopy.hobbies.push('gaming');
  
  deepCopy.name = 'Bob';
  deepCopy.hobbies.push('painting');
  
  // Original object remains unchanged
  console.log('Original Object:', originalObject);
  // Shallow copy affects age and modifies the reference to the hobbies array
  console.log('Shallow Copy:', shallowCopy);
  // Deep copy creates a completely independent copy with a new hobbies array
  console.log('Deep Copy:', deepCopy);
  