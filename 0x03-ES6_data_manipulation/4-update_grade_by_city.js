export default function updateStudentGradeByCity(students, city, newGrades) {
  //func to get student using location 
  function getcity() {
    if (!Array.isArray(students)) {
    return [];
    }

    return students.filter(student => 
       student.location === city)
       .map(student => {
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);
        const grade = gradeObj ? gradeObj.grade : 'N/A';
        return { ...student, grade };
       });
  
 }
}