export class GradeCalculator {

    public calculateGrade(score: number): string {
        const grades = ['A', 'B', 'C', 'D'];
        const gradeBoundary: number = [score >= 90, score >= 80, score >= 70, true].indexOf(true);
        return grades[gradeBoundary];
    }
}