const getCurrencyPrice = (precio, currency) => {
    const tasas = {
      USD: 1,
      ARS: 239,
      UYU: 150,
    };
  
    switch (currency) {
      case "USD":
        return precio * tasas.USD;
      case "ARS":
        return precio * tasas.ARS;
      case "UYU":
        return precio * tasas.UYU;
    }
  };
  
  export default getCurrencyPrice;