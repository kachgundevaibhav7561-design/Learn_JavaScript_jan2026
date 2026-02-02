var a,b,result;

function addition()
{
    a=Number(document.myForm.n1.value);
    b=Number(document.myForm.n2.value);
    result=a+b;

    document.myForm.res.value=result.toFixed(3);
}

function substract()
{
    a=Number(document.myForm.n1.value);
    b=Number(document.myForm.n2.value);
    result=a-b;

    document.myForm.res.value=result.toFixed(3);
}

function multiply()
{
    a=Number(document.myForm.n1.value);
    b=Number(document.myForm.n2.value);
    result=a*b;

    document.myForm.res.value=result.toFixed(3);
}

function divide()
{
    a=Number(document.myForm.n1.value);
    b=Number(document.myForm.n2.value);
    result=a/b;

    document.myForm.res.value=result.toFixed(3);
}
