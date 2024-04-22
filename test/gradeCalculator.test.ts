import { GradeCalculator } from "../src/gradeCalculator";

describe('GradeCalculator test', () => {
    let gradeCalculator:GradeCalculator;

    beforeEach(() => {
        gradeCalculator = new GradeCalculator();
    })
    
    it.each([
        [90, 'A'],
        [91, 'A'],
        [89, 'B'],
        [80, 'B'],
        [81, 'B'],
        [79, 'C'],
        [71, 'C'],
        [70, 'C'],
        [69, 'D'],
        [68, 'D'],
        [1, 'D'],
    ])('given score as number when score is $score then return grade $expectedGrade', (score:number, expectedGrade:string) => {
        const result = gradeCalculator.calculateGrade(score);

        expect(result).toBe(expectedGrade);
    })
})