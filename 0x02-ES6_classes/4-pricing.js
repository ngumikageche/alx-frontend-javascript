import Currency from './3-currency'
export default class Pricing {
    constructor (amount, currency) {
        this._amount = this.validateNumber(amount, 'amount');
        this._currency = this.validateCurrency(currency, 'currency');
    }
    //Get and Setter for amount
    get amount(){
        return this._amount;
    }

    set amount(newAmount){
        this._amount = this.validateNumber(newAmount, 'amount');
    }

    //get and setter for currency
    get currency(){
        return (this._currency);
    }

    set currency(newCurrency) {
        this._currency = this.validateString(newCurrency, 'currency');
    }

    //method that returns the format amount currency_name (currency_code)
    displayFullPrice(){
        const currency_obj = new Currency("EUR", "Euro")
        return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
    }
    //Static method to convert price
    convertPrice(amount, conversionRate) {
        return (amount * conversionRate)
    }

    // Validation methods
  validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`${attributeName} must be a number.`);
    }
    return value;
  }

  validateCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new Error(`${attributeName} must be an instance of Currency.`);
    }
    return value;
  }

}