(() => {

    //Aplicando principio de responsabilidad única
    //Priorizar la composición frente a la herencia

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

    interface userProps {
        email: string,
        role: string
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email,
            role,
        }: userProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            console.log('Checking credentials...');
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string
        workingDirectory: string,
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        birthdate: Date,
        email: string,
        gender: Gender,
        lastOpenFolder: string,
        name: string,
        role: string,
        workingDirectory: string
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,
            gender,
            birthdate,
            email,
            role
        }: UserSettingsProps) {

            this.person = new Person({
                name,
                gender,
                birthdate
            });

            this.user = new User({
                email,
                role
            });

            this.settings = new Settings({
                lastOpenFolder: '/home/user/projects',
                workingDirectory: '/home/user'
            });

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
        areCredentialsValid: userSettings.user.checkCredentials()
    });

})();