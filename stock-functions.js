function CreatePortfolio() {
  const result = new Map();
  return result;
}

function SizeOfPortfolio(portfolio) {
  return portfolio.size;
}

function BuyStocks(portfolio, stock, numshares) {
  if (!portfolio.has(stock)) {
    portfolio.set(stock, numshares);
  } else {
    portfolio.set(stock, portfolio.get(stock) + numshares);
  }
}

function SellStocks(portfolio, stock, numshares) {
  //If portfolio doesnt have the particular stock
  if (!portfolio.has(stock)) {
    throw "You don't own that stock, buddy";
  } else if ((portfolio.get(stock) - numshares) < 0) {
    //RAISE EXCEPTION HERE
    throw 'ShareSaleException' ;
  }
  //THEN IF THE STOCK HAS 0 delete it
  else if (portfolio.get(stock) - numshares === 0) {
    portfolio.delete(stock);
  } else portfolio.set(stock, portfolio.get(stock) - numshares);
}

function GetNumSharesPerStock(portfolio, stock) {
  return portfolio.get(stock);
}


exports.CreatePortfolio = CreatePortfolio;
exports.SizeOfPortfolio = SizeOfPortfolio;
exports.BuyStocks = BuyStocks;
exports.SellStocks = SellStocks;
exports.GetNumSharesPerStock = GetNumSharesPerStock;
