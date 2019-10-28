$(document).ready(() => {
  $.ajax({
    url: "https://api.compound.finance/api/v2/ctoken",
    type: "GET",
    success: (result) => {
      let cTokens = result.cToken;
      let cDAI = cTokens.find((x) => x.symbol == "cDAI");
      if (cDAI !== undefined && cDAI !== null) {
        let supplyRate = +cDAI.supply_rate.value;
        supplyRate *= 100; // To percent
        supplyRate = supplyRate.toFixed(1);
        
        // Set displayed interest rate
        $(".interest-rate").text(supplyRate + "%");
      }
    },
    error: (e) => {
      console.log(e);
    }
  })
});