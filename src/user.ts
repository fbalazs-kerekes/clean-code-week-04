export type UserEntity = {
    username: string
}

export class User {

    public processUserData(isUsernameLookup: boolean, users: UserEntity[], isLookup: boolean, searchUsername: string, processMaxCount: number): string {
        let result = '';

        if(isLookup) {
            if(isUsernameLookup) {
                result += this.findUser(users, searchUsername);
            } else {
                result += this.processText(processMaxCount);
            }
        } else {
            result = 'No action taken.';
        }
       
        return result;
    }

    public processText(processMaxCount: number) {
        return 'Processing... '.repeat(processMaxCount);
    }

    public findUser(users: UserEntity[], searchUsername: string): string {
        const foundIndex = users.findIndex((value) => value.username === searchUsername);
        let result = '';
        if (foundIndex !== -1) {
            result = 'User found: ' + searchUsername + ' at index ' + foundIndex;
        }
        return result;
    }
}