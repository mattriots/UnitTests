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
  if (!portfolio.has(stock)) {
    throw "You don't own that stock, buddy";
  } else if (portfolio.get(stock) - numshares < 0) {
    //RAISE EXCEPTION HERE
    throw "ShareSaleException";
  }
  //THEN IF THE STOCK HAS 0 delete it
  else if (portfolio.get(stock) - numshares === 0) {
    portfolio.delete(stock);
  } else portfolio.set(stock, portfolio.get(stock) - numshares);
}

function GetNumSharesPerStock(portfolio, stock) {
  return portfolio.get(stock);
}

function PrintPortfolio(portfolio) {
  portfolio.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
}

exports.CreatePortfolio = CreatePortfolio;
exports.SizeOfPortfolio = SizeOfPortfolio;
exports.BuyStocks = BuyStocks;
exports.SellStocks = SellStocks;
exports.PrintPortfolio = PrintPortfolio;
exports.GetNumSharesPerStock = GetNumSharesPerStock;
