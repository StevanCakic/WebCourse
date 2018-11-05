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

let newArr = []
companies.forEach(function (elm) {
    if (elm.category === "Finance") {
        newArr.push(elm);
    }
})

// console.log(newArr);

function each(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let newArr1 = [];
each(companies, function (elm) {
    if (elm.category === "Finance") {
        newArr1.push(elm);
    }
})

// console.log(newArr1);

// Implement this: Print all company names with forEach

// * Implement filter() method
// Parameters: array and callback
function filter2(arr, callback) {
    // 1. Create empty array
    let newArr = [];
    // 2. Iterate through array
    for (let i = 0; i < arr.length; i++) {
        // Call callback with array element
        if (callback(arr[i])) { // if true push in created array
            newArr.push(arr[i]);
        }
    }
    // 3. return new array
    return newArr;
}

// Get 21 and older
const filteredArr = ages.filter(function (element) {
    return element >= 21;
})

let filteredArr2 = filter2(ages, function (elem) {
    return elem >= 21;
});

// console.log(filteredArr2);

// Get Retail companies 

const retailCompanies = companies.filter(function (company) {
    return company.category === "Retail";
})

// console.log(retailCompanies);

// Get 80s companies (>= 80 and < 90)
const companiesBetween80sAnd90s = companies.filter(function (company) {
    return company.start >= 1980 && company.start < 1990;
})

// console.log(companiesBetween80sAnd90s);

// Get companies that lasted 10 years or more
const companiesLastedMoreThen10Years = companies.filter(function (company) {
    return company.end - company.start >= 10;
})

// console.log(companiesLastedMoreThen10Years);

// * Implement map() method
// Parameters: array and callback
function map2(arr, callback) {
    // 1. Create empty array
    const newArr = [];
    // 2. Iterate through array
    for (let i = 0; i < arr.length; i++) {
        // in ith list element store callback(arr[i])
        newArr.push(callback(arr[i]));
    }

    // 3. return new array
    return newArr;
}

// Create array of company names

const companyNames = companies.map(function (company) {
    return company.name;
});

// console.log(companyNames);

const testMap = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});
// console.log(testMap)
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
//

// Sort

const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// * Implement reduce method
// Parameters: array, callback and initial
function reduce2(arr, callback, initial) {
    // 1. Set result to initial
    let result = initial;

    // 2. Iterate through array
    for (let i = 0; arr.length; i++) {
        // in result store callback(result, arr[i])
        result = callback(result, arr[i]);
    }

    //return result
    return result;
}

// Reduce

/*
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}

const ageSum = ages.reduce(function (total, age) {
    return total + age;
}, 0);

// console.log(ageSum);

const ageSum = ages.reduce((total, age) => total + age, 0);
*/
// Get total years for all companies

const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

// console.log(totalYears);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Every - try some examples
const allGreaterThanZero = ages.every(function(age){
    return age > 0;
})

// console.log(allGreaterThanZero);


// Some - try some examples
const someGreaterThan50 = ages.some(function(age){
    return age > 100;
})

// console.log(someGreaterThan50);

// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

 console.log(combined);