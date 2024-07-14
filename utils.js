const FehrenheitToCC = (F) => {
    return (F-32)*5/9;
}

const CelciusToFehrenheit = (C) => {
    return (C * 9)/5 + 32;
}

module.exports = {FehrenheitToCC, CelciusToFehrenheit};