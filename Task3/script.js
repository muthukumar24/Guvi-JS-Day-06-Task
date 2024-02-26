// Write a “person” class to hold all the details:-
class Person{
    constructor(
        firstName,
        lastName,
        profession,
        club,
        country,
        salary
    )
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.club = club;
        this.country = country;
        this.salary = salary;
    }
    
    // Method to display person details
    displayPersonDetails()
    {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Profession: ${this.profession}`);
        console.log(`Club Name: ${this.club}`);
        console.log(`National Team Name: ${this.country}`);
        console.log(`Salary(For Club and Country): ${this.salary}`);
    }

}

const personOneDetails = new Person('Cristiano','Ronaldo','Footballer', 'Al Nassr FC', 'Portugal',20000000)
const personTwoDetails = new Person('Lionel','Messi','Footballer','Inter Miami FC','Argentina',20000000)
console.log("======= First Person Details =======");
personOneDetails.displayPersonDetails()
console.log("========== Second Person Details ==========");
personTwoDetails.displayPersonDetails()
