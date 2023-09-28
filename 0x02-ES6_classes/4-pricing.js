import Currency from './3-currency'
export default class Pricing {
    constructor (amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }
    //Get and Setter for amount
    get amount(){
        return this._amount;
    }

    set amount(newAmount){
        this._amount = this.validateNumber(newAmount, '_amount');
    }

    //get and setter for currency
    get currency(){
        return (this._currency);
    }

    set currency(newCurrency) {
        this._currency = this.validateString(newCurrency, '_currency');
    }

    //method that returns the format amount currency_name (currency_code)
    displayFullPrice(){
        const currency_obj = new Currency("EUR", "Euro")
        return (`${this._amount} ${currency_obj.displayFullCurrency()}`)
    }
    convertPrice(amount, conversionRate) {
        return (this.amount * conversionRate)
    }

}