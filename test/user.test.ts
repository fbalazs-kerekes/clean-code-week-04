import { User } from "../src/user";

describe('User test', () => {
    let user:User;

    beforeEach(() => {
        user = new User();
    })

    const paramX = 0;
    const paramY:string = '';
    const paramB = 0;

    const users = [
        'John',
        'Doe',
        'Jane',
        'Foo',
        'Bar',
        'Lorem',
        'Ipsum'
    ];

    const username = 'Doe';

    it('given users list and lookup username when find an user by lookup username then return the user found string', () => {
        const paramE = 0;
        const paramZ:boolean = true;
        const paramC:boolean = true;
        
        const expectedUsersIndex = 1;
        const expectedResult = `User found: ${username} at index ${expectedUsersIndex}`;

        const result = user.processUserData(paramX, paramY, paramZ, users, paramB, paramC, username, paramE);

        expect(result).toBe(expectedResult);
    })

    it('given users list and lookup username when find an user by lookup username then return the user found string', () => {
        const paramX = 0;
        const paramY:string = '';
        const paramB = 0;
        const paramE = 0;
        const paramZ:boolean = true;
        const paramC:boolean = true;
        const username = 'Doe';
        const expectedUsersIndex = 1;
        const expectedResult = `User found: ${username} at index ${expectedUsersIndex}`;


        const result = user.processUserData(paramX, paramY, paramZ, users, paramB, paramC, username, paramE);

        expect(result).toBe(expectedResult);
    })

    it('given users list and processing limit when step to processig limit then return the processig status', () => {
        const paramE = 3;
        const paramZ:boolean = false;
        const paramC:boolean = true;
        const username = 'Doe';
        const expectedRepeatCount = paramE;
        const expectedResult = 'Processing... '.repeat(expectedRepeatCount);


        const result = user.processUserData(paramX, paramY, paramZ, users, paramB, paramC, username, paramE);

        expect(result).toBe(expectedResult);
    }) 


    it('given users list and lookup username when neither user lookup nor count then no action executed', () => {
        const paramE = 3;
        const paramZ:boolean = false;
        const paramC:boolean = false;
        const username = 'Doe';
        const expectedRepeatCount = paramE;
        const expectedResult = 'No action taken.';


        const result = user.processUserData(paramX, paramY, paramZ, users, paramB, paramC, username, paramE);

        expect(result).toBe(expectedResult);
    }) 
})