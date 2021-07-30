function getResult() {
    const finalResult = getValueOfStock();
    document.getElementById('resultDivPercentage').innerHTML = finalResult.lossPercentage;
    document.getElementById('resultDivTotal').innerHTML = finalResult.loss;
}

function getValueOfStock() {
    let cp = document.getElementById('costPrice').value;
    let quantity = document.getElementById('quantity').value;
    let sp = document.getElementById('sellingPrice').value;

    if (cp > sp) {
        return getLoss(cp, quantity, sp);
    } else if (cp < sp) {
        return getProfit(cp, quantity, sp)
    }
}

function getLoss(costPrice, amount, sellingPrice) {
    let loss = (costPrice * amount) - (sellingPrice * amount);
    console.log("loss " + (loss / (costPrice * amount)) * 100)
    let lossPercentage = (loss / (costPrice * amount)) * 100
    return {
        loss,
        lossPercentage
    }
    // return ()
}

function getProfit(costPrice, amount, sellingPrice) {
    let profit = (sellingPrice * amount) - (costPrice * amount);
    console.log("profit " + (profit / (costPrice * amount)) * 100)
    let profitPercentage = (profit / (costPrice * amount)) * 100;
    return {
        profit,
        profitPercentage
    }
}