let currentValue=``;
document.querySelector('#display').value=currentValue;

function checkInteger(currentValue) {
    if (!Number.isInteger(currentValue)) {
        currentValue = currentValue.toFixed(4);
        console.log(`this is if block`);
        console.log(currentValue);
    }
    else console.log(`this is else block`);
}
