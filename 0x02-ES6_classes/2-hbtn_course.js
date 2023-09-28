export default class HolbertonCourse {
	constructor (name, length, students) {
		this._name = this.validateString(name, 'name')
		this._length = this.validateNumber(length, 'length');
		this._students = this.validateArrayOfStrings(students, 'students');
	} 
	//getter and setter for name
	get name() {
		return this._name;
	}
	set name(newName) {
		this._name = this.validateString(newName, 'name');
	}

	//getter and setter for length
	get length() {
		return this._length;
	}
	set length(newLength) {
		this._length = this.validateString(newLength, 'length');
	}

	//getter and setter for students
	get students() {
		return this._students;
	}
	set students(newStudents) {
		this._students = this.validateArrayOfStrings(newStudents, 'students');
	}

	// Validation methods
	validateString(value, attributeName) {
		if (typeof value !== 'string') {
			throw new Error(`${attributeName} must be a string`);
		}
		return value;
	}

	validateNumber(value, attributeNumber) {
		if (typeof value !== 'number' || isNaN(value)) {
			throw new Error(`${attributeNumber} must be an integer.`);
		}
		return value;
	}

	validateArrayOfStrings(value, attributeName) {
		if (!Array.isArray(value) || value.some(item => typeof item !== 'string')) {
		  throw new Error(`${attributeName} must be an array of strings.`);
		}
		return value;
	}		
}
