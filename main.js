// Створити клас Людина.
class Person {
    constructor(userName, userSex) {
        this.user_name = userName;
        this.user_sex = userSex;
    }
}

//Створити клас Квартира
class Apartment {
    constructor() {
        this.resident = [];
    }

    addResident(person) {
        this.resident.push(person);
    }
}

// Створити клас Будинок
class House {
    constructor(maxApartmentsNumb) {
        this.apartments = [];
        this.maxApartments = maxApartmentsNumb;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log('Це максимальна кількість квартир у будинку');
        }
    }
}

// Створення декількох екземплярів класу Людина
let person1 = new Person('Ann', 'female');
let person2 = new Person('Alex', 'male');
let person3 = new Person('Tom', 'male');
let person4 = new Person('Emily', 'female');

// Створення декількох екземплярів класу Квартира
let apartment1 = new Apartment();
let apartment2 = new Apartment();

// Додавання екземплярів класу Людина до екземплярів класу Квартира
apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);
apartment2.addResident(person4);

// Створення екземпляру класу Будинок з максимальною кількістю квартир 2
let house = new House(2);

// Додавання екземплярів класу Квартира до екземпляру класу Будинок
house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house.apartments);