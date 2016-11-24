export class User {
    name: string;
    sex: string;
    age: string;
    country: string;

    constructor(
        name: string,
        sex: string,
        age: string,
        country: string
     ) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.country = country;
    }
}