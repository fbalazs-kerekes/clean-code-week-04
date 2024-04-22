import { UserInputValidator } from "../src/userInputValidator"

describe('UserInputValidator test', () => {
    let userInputValidator:UserInputValidator;

    beforeEach(() => {
        userInputValidator = new UserInputValidator();
    });

    it.each([
        ['username', true],
        ['user', false],
        ['user1', true],
        ['User1', true],
        ['USER1', true],
        ['4422', false],
        ['995588', true],
        ['', false],
        ['123456789012345678902', false],
    ])('given input string is  when input string length between 5 and 20 and only contains alphabetical characters or alphanumneric and validate it then return true', (username: string, expectedResult:boolean) => {
        const result = userInputValidator.validateUserInput(username);

        expect(result).toBe(expectedResult);
    })
})