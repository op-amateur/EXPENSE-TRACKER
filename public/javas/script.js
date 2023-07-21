AOS.init()
function expense(){
    var cbalance = document.getElementById("cbalance");
    var income = document.getElementById("income");
    var expense = document.getElementById("expense");
    var input = document.getElementById("input").value;
    var description = document.getElementById("descrip").value;

    var transaction_record = document.getElementById("transaction_record")
    var record = document.createElement("div");
    record.setAttribute("id","history");
    var history = document.createTextNode(description  + "  ---------  " + input + "   Rs  ");
    record.appendChild(history);
    transaction_record.appendChild(record);
    record.addEventListener('click',function()
    {
        if(parseInt(input)>0)
        {
            t=parseInt(income.innerHTML);
            t-=parseInt(input);
            income.innerHTML=t;
            s=parseInt(cbalance.innerHTML);
            s-=parseInt(input);
            cbalance.innerHTML=s;
        }
        else if(parseInt(input)<0)
        {
            t=parseInt(expense.innerHTML);
            t+=parseInt(input);
            expense.innerHTML=t;
            s=parseInt(cbalance.innerHTML);
            s-=parseInt(input);
            cbalance.innerHTML=s;
        }
        this.remove(record);
    })


    if(input == "" )
    {
        alert("Please ! Enter Your Salaray or Expense.");
        record.remove(record);
    }


    else if(parseInt(input) > 0) 
    {
        total_amount = parseInt(cbalance.innerHTML); 
        inc_balance = parseInt(income.innerHTML);
        document.getElementById("cbalance").innerHTML = (total_amount + parseInt(input)) + ".00 Rs " ;
        document.getElementById("income").innerHTML = (inc_balance + parseInt(input)) + ".00 Rs";
        document.getElementById("input").value;
        document.createElement("h2");

    }

    else if(parseInt(input)<0)
    {
        c_balance = parseInt(cbalance.innerHTML);
        exp_balance = parseInt(expense.innerHTML);
        document.getElementById("expense").innerHTML = (exp_balance - input)+ " .00 Rs";
        document.getElementById("cbalance").innerHTML = (c_balance + parseInt(input)) + " .00 Rs";
    }

    document.getElementById("input").value = '';
    document.getElementById("descrip").value = '';

    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}
