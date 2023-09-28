export default class Currency {
    constructor (code, name){
        this._code = code
        this._name = name
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
        return(`${this._name} ${this._code}`)
        
    }
}