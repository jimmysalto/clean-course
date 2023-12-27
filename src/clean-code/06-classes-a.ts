(() => {

    
    
    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    const newPerson = new Person(
        'Jimmy',
        'M',
        new Date('1996-04-20')
    );

    console.log({ newPerson });

})();