'use strict';

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

var loan = function(){
  var account = {
    borrowed : 550000,
    balance : 286000,
    monthlyPayment : 1700,
    defaulted : 0,
    defaultsToForeclose : 5,
    foreclosed : false
  };
  var missPayment = function(){
    account.defaulted++;
    if(account.defaulted >= account.defaultsToForeclose){
      account.foreclosed = true;
    }
  };

  return {
    getBalance : function(){

    },
    receivePayment : function(){

    },
    getMonthlyPayment : function(){

    },
    isForeclosed : function(){

    }
  }
};