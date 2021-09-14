let cp = document.getElementById('costPrice');
let quantity = document.querySelector('#quantity');
let sp = document.querySelector('#sellingPrice');
let profitText = document.querySelector('.profit');
let lossText = document.querySelector('.loss');
let errorText = document.querySelector('.error-text1');
errorText.style.display = 'none';
/* function errorText() {
    if (cp.value < 1 && quantity.value < 1 && sp.value < 1) {
        document.querySelector('.error-text1').innerHTML = 'Put a valid Purchase Price.'
    }
} */
function errorTextMsg() {

    if (cp.value < 1 || quantity.value < 1 || sp.value < 1) {
        errorText.style.display = 'block'
        document.querySelector('.funny-text').style.color = 'red';
        document.querySelector('.funny-text').innerHTML = `<h4> Output Loading.....</h4>`;
        document.querySelector('img').src = 'https://c.tenor.com/4fQgj7pCztgAAAAi/kawaii-cute.gif';
        errorText.innerHTML = '*Put a valid Number.';
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
    } else {
        profitText.style.color = "blue";
        lossText.style.color = "blue";
        document.querySelector('.funny-text').style.color = '#fff';
        document.querySelector('img').src = 'https://c.tenor.com/o5lVa9lcrY4AAAAi/crawling-spy.gif'
        document.querySelector('.funny-text').innerHTML = `You lost ${0.00}%<b>.</b> Your total loss is  ${0.00}`
        document.querySelector('.main-container').style.boxShadow = "0 14px 40px -10px #ffff"
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
    document.querySelector('.funny-text').style.color = 'red';
    document.querySelector('img').src = 'https://c.tenor.com/N27WfZCY4nUAAAAi/sorry-sad.gif'
    document.querySelector('.funny-text').innerHTML = `You lost ${lossObj.lossPercentage.toFixed(2)}%<b>.</b> Your total loss is  ${lossObj.loss}`
}

function returnProfitFromStock(profitObj) {
    document.querySelector('.funny-text').style.color = 'green'
    // document.querySelector('img').src = 'https://media3.giphy.com/media/l41Ys1fQky5raqvMQ/giphy.gif?cid=790b76113c5577df8a1e8804bd2cd8701fabeb66370a74cc&rid=giphy.gif&ct=g'
    document.querySelector('img').src = 'https://c.tenor.com/UhLv_deOrtMAAAAi/happy-milk-peach-happy.gif'
    document.querySelector('.funny-text').innerHTML = `You gained ${profitObj.profitPercentage.toFixed(2)}%<b>.</b> Your total profit is  ${profitObj.profit}`

}