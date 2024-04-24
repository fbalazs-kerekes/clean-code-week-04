export class UserInputValidator {
    
    public validateUserInput(input: string): boolean {
        input = input.trim();
        if(input.length < 5 || input.length > 20) {
            return false;
        }
        return /^[a-zA-Z0-9]+$/.test(input);
    }

}