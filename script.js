let cp = document.getElementById('costPrice');
let quantity = document.querySelector('#quantity');
let sp = document.querySelector('#sellingPrice');
let profitText = document.querySelector('.profit');
let lossText = document.querySelector('.loss');
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

        profitText.style.color = 'blue'
        lossText.style.color = 'red'
        document.querySelector(".main-container").style.boxShadow = "0 14px 40px -10px red";
        const loss = getLoss(cp.value, quantity.value, sp.value);
        returnLossFromStock(loss);

    } else if (sp.value > cp.value) {

        profitText.style.color = "#3ED625"
        lossText.style.color = 'blue'
        document.querySelector(".main-container").style.boxShadow = "0 14px 40px -10px  #00ff00";

        const profit = getProfit(cp.value, quantity.value, sp.value);
        returnProfitFromStock(profit);
    }
}

function getLoss(costPrice, amount, sellingPrice) {
    let loss = (costPrice - sellingPrice) * amount;
    let lossPercentage = (loss / (costPrice * amount)) * 100

    return {
        loss,
        lossPercentage
    };
}

function getProfit(costPrice, amount, sellingPrice) {
    let profit = (sellingPrice - costPrice) * amount;
    let profitPercentage = (profit / (costPrice * amount)) * 100;
    console.log(profit)
    console.log(profitPercentage)

    return {
        profit,
        profitPercentage
    }
}

function returnLossFromStock(lossObj) {
    document.querySelector('img').src = 'https://c.tenor.com/N27WfZCY4nUAAAAi/sorry-sad.gif'
    document.querySelector('.funny-text').innerHTML = `You lost ${lossObj.lossPercentage}%<b>.</b> Your total loss is  ${lossObj.loss}`
}

function returnProfitFromStock(profitObj) {
    // document.querySelector('img').src = 'https://media3.giphy.com/media/l41Ys1fQky5raqvMQ/giphy.gif?cid=790b76113c5577df8a1e8804bd2cd8701fabeb66370a74cc&rid=giphy.gif&ct=g'
    document.querySelector('img').src = 'https://c.tenor.com/UhLv_deOrtMAAAAi/happy-milk-peach-happy.gif'
    document.querySelector('.funny-text').innerHTML = `You gained ${profitObj.profitPercentage}%<b>.</b> Your total profit is  ${profitObj.profit}`

}