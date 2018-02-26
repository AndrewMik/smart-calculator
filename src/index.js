class SmartCalculator {
  constructor(initialValue) {
    this.resultValue = initialValue.toString();
  }

  add(number) {
   this.resultValue += "+" + number.toString();
   return this;
  }
  
  subtract(number) {
    this.resultValue += "-" + number.toString();
    return this;
  }

  multiply(number) {
    this.resultValue += "*" + number.toString();
    return this;
  }

  devide(number) {
    this.resultValue += "/" + number.toString();
    return this;
  }

  pow(number) {
    this.resultValue += "**" + number.toString();
    return this;
  }

  toString(){
    return eval(this.resultValue);
  }
}

module.exports = SmartCalculator;
