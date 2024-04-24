import { User } from "../src/user";
import { UserEntity } from "../src/user";

describe('User test', () => {
    let user:User;

    beforeEach(() => {
        user = new User();
    })

    const processMaxCount = 0;

    const users = [
        'John',
        'Doe',
        'Jane',
        'Foo',
        'Bar',
        'Lorem',
        'Ipsum'
    ].map((v) => ({username: v} as UserEntity));

    const searchUsername = 'Doe';

    it('given users list and lookup username when find an user by lookup username then return the user found string', () => {
        const isUsernameLookup:boolean = true;
        const isLookup:boolean = true;
        
        const expectedUsersIndex = 1;
        const expectedResult = `User found: ${searchUsername} at index ${expectedUsersIndex}`;

        const result = user.processUserData(isUsernameLookup, users, isLookup, searchUsername, processMaxCount);

        expect(result).toBe(expectedResult);
    })

    it('given users list and not lookup username and max process count is 0 then return empty string', () => {
        const isUsernameLookup:boolean = false;
        const isLookup:boolean = true;
        const expectedResult = '';

        const result = user.processUserData(isUsernameLookup, users, isLookup, searchUsername, processMaxCount);

        expect(result).toBe(expectedResult);
    })

    it('given users list and processing limit when step to processig limit then return the processig status', () => {
        const processMaxCount = 3;
        const isUsernameLookup:boolean = false;
        const isLookup:boolean = true;
        const expectedRepeatCount = processMaxCount;
        const expectedResult = 'Processing... '.repeat(expectedRepeatCount);


        const result = user.processUserData(isUsernameLookup, users, isLookup, searchUsername, processMaxCount);

        expect(result).toBe(expectedResult);
    }) 


    it('given users list and lookup username when neither user lookup nor count then no action executed', () => {
        const processMaxCount = 3;
        const isUsernameLookup:boolean = false;
        const isLookup:boolean = false;
        const expectedResult = 'No action taken.';


        const result = user.processUserData(isUsernameLookup, users, isLookup, searchUsername, processMaxCount);

        expect(result).toBe(expectedResult);
    }) 
})