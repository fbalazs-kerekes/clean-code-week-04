export class GradeCalculator {

    public calculateGrade(score: number): string {
        if (score >= 90) {
            return 'A';
        } else {
            if (score >= 80) {
                return 'B';
            } else {
                if (score >= 70) {
                    return 'C';
                } else {
                    return 'D';
                }
            }
        }
    }
}