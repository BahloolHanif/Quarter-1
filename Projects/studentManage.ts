class Student {
    constructor(public name: string, public studentID: string, public courses: Course[] = []) { }

    enroll(course: Course) {
        this.courses.push(course);
    }

    viewBalance() {
        // Implement logic to calculate and display the balance.
    }

    payTuition(amount: number) {
        // Implement logic to update the balance after payment.
    }

    showStatus() {
        // Implement logic to display student details, including name, studentID, courses, and balance.
    }
}

class Course {
    constructor(public name: string, public code: string, public tuition: number) { }
}
