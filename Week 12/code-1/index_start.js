const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Implement forEach() loop

// Implement this: Print all company names with forEach

// * Implement filter() method
    // Parameters: array and callback
    // 1. Create empty array
    // 2. Iterate through array
        // Call callback with array element
            // if true push in created array
    // 3. return new array

// Filter
    // Get 21 and older
    // Get Retail companies
    // Get 80s companies (>= 80 and < 90)
    // Get companies that lasted 10 years or more

// * Implement map() method
    // Parameters: array and callback
    // 1. Create empty array
    // 2. Iterate through array
        // in ith list element store callback(arr[i])
    // 3. return new array

// Map
    // Create array of company names

    // const testMap = companies.map(function(company) {
    //   return `${company.name} [${company.start} - ${company.end}]`;
    // });

    // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

    // const ageMap = ages
    //   .map(age => Math.sqrt(age))
    //   .map(age => age * 2);

//

// Sort

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// * Implement reduce method

// Parameters: array, callback and initial
    // 1. Set result to initial
    // 2. Iterate through array
        // in result store callback(result, arr[i])
    // 3. return new array

// Reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Every - try some examples


// Some - try some examples


// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);