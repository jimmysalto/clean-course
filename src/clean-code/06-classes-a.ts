(() => {

    // No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
        
    }

    const newPerson = new Person(
        'Jimmy',
        'M',
        new Date('1996-04-20')
    );

    console.log({ newPerson });

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(
                name,
                gender,
                birthdate
            );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            console.log('Checking credentials...');
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date

        ) {
            super(
                email,
                role,
                name,
                gender,
                birthdate
            );
        }
    }

    const userSettings = new UserSettings(
        '/home/jimmy',
        '/home/jimmy/projects',
        'saltojimmy@gmail.com',
        'admin',
        'Jimmy',
        'M',
        new Date('1996-04-20')
    );

    console.log({
        userSettings,
        areCredentialsValid: userSettings.checkCredentials()
    });

})();