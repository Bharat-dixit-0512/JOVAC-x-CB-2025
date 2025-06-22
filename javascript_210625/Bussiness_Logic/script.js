const employees = [
    {
        fullName: "Ritika Malhotra", 
        age: 29,
        location: "Gurgaon"
    },
    {
        fullName: "Aditya Rao", 
        age: 35, 
        location: "Bengaluru" 
    },
    {
        fullName: "Sana Qureshi", 
        age: 24, 
        location: "Noida" 
    },
    {
        fullName: "Krishna Iyer", 
        age: 31, 
        location: "Mumbai" 
    },
    {
        fullName: "Harleen Kaur", 
        age: 26, 
        location: "Amritsar" 
    },
    {
        fullName: "Mohit Batra", 
        age: 33, 
        location: "Delhi" 
    },
    {
        fullName: "Isha Agarwal", 
        age: 28, 
        location: "Lucknow" 
    },
    {
        fullName: "Tariq Hasan", 
        age: 22, 
        location: "Patna" 
    },
    {
        fullName: "Simran Shetty", 
        age: 30, 
        location: "Mysore" 
    },
    {
        fullName: "Arjun Bhatt", 
        age: 27, 
        location: "Noida" 
    }
];

const updatedEmployees = employees.map(emp => ({
    ...emp,
    isSenior: emp.age > 30
}));
console.log("Updated Employees with Senior Flag:", updatedEmployees);

const metroEmployees = employees.filter(emp =>
    emp.location === "Delhi" || emp.location === "Noida"
);
console.log("Employees from Delhi or Noida:", metroEmployees);

const totalEmployeeAge = employees.reduce((sum, emp) => sum + emp.age, 0);
console.log("Total Age of Employees:", totalEmployeeAge);
