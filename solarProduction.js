var monthlyProduction =[
  {month: "Jan", kWh: 402},
  {month: "Feb", kWh: 453},
  {month: "Mar", kWh: 540},
  {month: "Apr", kWh: 578},
  {month: "May", kWh: 628},
  {month: "Jun", kWh: 611},
  {month: "Jul", kWh: 648},
  {month: "Aug", kWh: 645},
  {month: "Sep", kWh: 527},
  {month: "Oct", kWh: 503},
  {month: "Nov", kWh: 424},
  {month: "Dec", kWh: 393}
  ];

var ppkW = 0.17;

annualSolarCost = function(monthlyProduction, ppkW){
return monthlyProduction.reduce(function(total,monthlyProduction){return total + monthlyProduction.kWh * ppkW },0);

};
console.log (annualSolarCost(monthlyProduction, ppkW));
