
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalance = parseFloat(balanceTotalText);
    return newBalance;
}

function updateBalance(newDepositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const newBalance = parseFloat(balanceTotalText);
    const newBalance = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = newBalance + newDepositAmount;
    }
    else {
        balanceTotal.innerText = newBalance - newDepositAmount;
    }

}


document.getElementById('button-submit').addEventListener('click', function () {
    // const depositAmount = document.getElementById('deposit-amount');
    // const depositAmountText = depositAmount.value;
    // const newDepositAmount = parseFloat(depositAmountText);


    //get and update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const newDepositTotal = parseFloat(depositTotalText);

    // const total = newDepositTotal + newDepositAmount;
    // depositTotal.innerText = total;


    // update account balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const newBalance = parseFloat(balanceTotalText);
    // balanceTotal.innerText = newBalance + total;
    const newDepositAmount = getInputValue('deposit-amount');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});

// handle withdraw
document.getElementById('button-submited').addEventListener('click',
    function () {
        // const withdrawAmount = document.getElementById('withdraw-amount');
        // const withdrawAmountText = withdrawAmount.value;
        // const newWithdrawAmount = parseFloat(withdrawAmountText);



        // const withdrawTotal = document.getElementById('withdraw-total');
        // const withdrawTotalText = withdrawTotal.innerText;
        // const totalWithdraw = parseFloat(withdrawTotalText);
        // const newWithdraw = totalWithdraw + newWithdrawAmount;
        // withdrawTotal.innerText = newWithdraw;

        // update balance
        // const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        // const newBalance = parseFloat(balanceTotalText);
        // balanceTotal.innerText = newBalance - newWithdraw;
        const newWithdrawAmount = getInputValue('withdraw-amount');
        const currentBalance = getCurrentBalance();
        if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
            updateTotalField('withdraw-total', newWithdrawAmount);
            updateBalance(newWithdrawAmount, false);
        }



        // withdrawAmount.value = '';
    })