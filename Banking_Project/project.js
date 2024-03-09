// This Function is for Deposit part


function deposithandle(){
    var Depositamount=document.getElementById("Depositamount").value;
    var DepositAmount=convertToNumber(Depositamount);
    var setdepo=document.getElementById("setdepo").innerText;
    var setdepoAmount=convertToNumber(setdepo);
    var sum=setdepoAmount+DepositAmount;
    document.getElementById("setdepo").innerText=sum;


     var total_amount=document.getElementById('total_amount').innerText;
     var converted_total_amount=convertToNumber(total_amount);
     var total_sum=converted_total_amount+DepositAmount;
     document.getElementById('total_amount').innerText=total_sum;

    document.getElementById("Depositamount").value=" "; /*here value will zero in the input after click */

 
 }
function withdrawhandle(){
    var withdrawamount=document.getElementById("withdrawamount").value;
    var WithdrawAmount=convertToNumber(withdrawamount);
    var setwith=document.getElementById("setwith").innerText;
    var setdwithAmount=convertToNumber(setwith);
    var sum=setdwithAmount+WithdrawAmount;
    document.getElementById("setwith").innerText=sum;

    var total_amount=document.getElementById('total_amount').innerText;
    var converted_total_amount=convertToNumber(total_amount);
    var total_sum=converted_total_amount- WithdrawAmount;
    document.getElementById('total_amount').innerText=total_sum;

    document.getElementById("withdrawamount").value=" ";   /*here value will zero in the input after click */
}
// This Function is for Withdrawal part




function convertToNumber(value)
{
    return parseFloat(value)
}