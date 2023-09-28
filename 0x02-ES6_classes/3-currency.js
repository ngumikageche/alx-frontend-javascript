export default class Currency {
    constructor (code, name){
        this._code = this.validateString(code, 'code')
        this._name = this.validateString(name, 'name')
    }

    //get and setter for code
    get code()
    {
        return this._code
    }

    set code(newCode)
    {
        this._code = this.validateString(newCode, 'code')
    }

    //get and setter for name
    get name()
    {
        return this._name
    }

    set name(newName)
    {
        this._name = this.validateString(newName, 'name')
    }

    //func that will return the attr in the format name (code)
    displayFullCurrency() {
        return(`${this._name} (${this._code})`)
        
    }

   // Validation methods
	validateString(value, attributeName) {
		if (typeof value !== 'string') {
			throw new Error(`${attributeName} must be a string`);
		}
		return value;
	}

  
}