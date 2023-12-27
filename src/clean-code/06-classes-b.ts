(() => {

    // No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({
            name,
            gender,
            birthdate
        }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    interface userProps extends PersonProps {
        email: string,
        role: string
    }

    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate
        }: userProps) {
            super({
                name,
                gender,
                birthdate
            });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            console.log('Checking credentials...');
            return true;
        }
    }

    interface UserSettingsProps extends userProps {
        workingDirectory: string,
        lastOpenFolder: string
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps) {
            super({
                email,
                role,
                name,
                gender,
                birthdate
            });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/home/user',
        lastOpenFolder: '/home/user/projects',
        email: 'saltojimm@gmail.com',
        role: 'admin',
        name: 'Jimmy',
        birthdate: new Date('1995-01-01'),
        gender: 'M'
    });

    console.log({
        userSettings,
        areCredentialsValid: userSettings.checkCredentials()
    });

})();