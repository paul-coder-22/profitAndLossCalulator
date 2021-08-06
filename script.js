let cp = document.getElementById('costPrice');
let quantity = document.querySelector('#quantity');
let sp = document.querySelector('#sellingPrice');
console.log(document.querySelector('.colorText-change').innerHTML)
/* function errorText() {
    if (cp.value < 1 && quantity.value < 1 && sp.value < 1) {
        document.querySelector('.error-text1').innerHTML = 'Put a valid Purchase Price.'
    }
} */
function errorTextMsg() {

    if (cp.value < 1 || quantity.value < 1 || sp.value < 1) {
        document.querySelector('.error-text1').innerHTML = 'Put a valid Purchase Price.'
    } else {
        document.querySelector('.error-text1').innerHTML = ''
        getValueOfStock();
    }
}

document.querySelector("#getResult").addEventListener('click', () => {
    errorTextMsg();
})
/*     const finalResult = getValueOfStock();
    document.getElementById('resultDivPercentage').innerHTML = finalResult.lossPercentage;
    document.getElementById('resultDivTotal').innerHTML = finalResult.loss; */


function getValueOfStock() {

    if (cp.value > sp.value) {
        const loss = getLoss(cp.value, quantity.value, sp.value);
        returnLossFromStock(loss);
    } else if (cp.value < sp.value) {
        const profit = getProfit(cp.value, quantity.value, sp.value);
        returnProfitFromStock(profit);
    }
}

function getLoss(costPrice, amount, sellingPrice) {
    let loss = (costPrice * amount) - (sellingPrice * amount);
    let lossPercentage = (loss / (costPrice * amount)) * 100
    return {
        loss,
        lossPercentage
    }
}

function getProfit(costPrice, amount, sellingPrice) {
    let profit = (sellingPrice * amount) - (costPrice * amount);
    let profitPercentage = (profit / (costPrice * amount)) * 100;
    return {
        profit,
        profitPercentage
    }
}

function returnLossFromStock(lossObj) {
    document.querySelector('img').src = 'https://media.giphy.com/media/l31XaGrL7GoevTVhXX/giphy.gif'
    document.querySelector('.funny-text').innerHTML = `You lost ${lossObj.lossPercentage}. Your total loss is  ${lossObj.loss}`
}

function returnProfitFromStock(profitObj) {
    document.querySelector('img').src = 'https://media.giphy.com/media/14udF3WUwwGMaA/giphy.gif'
    document.querySelector('.funny-text').innerHTML = `You gained ${profitObj.profitPercentage}. Your total profit is  ${profitObj.profit}`

}