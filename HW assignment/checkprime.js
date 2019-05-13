
const init = function()
{
  document.getElementById("enterNumber").addEventListener("click", primeCheck);
}
const primeCheck = function (ev)
{
  ev.preventDefault();
  ev.stopPropagation();
  var userNum = parseInt(document.getElementById("numberInput").value);

  if(userNum > 1)
  {
    var i;
    var flag = 0;
        for(i = 2; i <= userNum/2; ++i)
        {
            if(userNum%i == 0)
            {
                flag = 1;
                break;
            }
        }

        if (userNum == 1) {
          document.getElementById("display").innerHTML = "1 is neither a prime nor a composite number."
        }
        else {
            if (flag == 0) {
              document.getElementById("display").innerHTML = ("YES [ " + userNum + " ] is a prime number");
            }
            else {
              var t = userNum;
              var tmpDisplay = "";

              var i=2;
              while(t>1) {
                 if(t%i == 0) {
                   tmpDisplay += (i+", ");
                   t=t/i;
                  }
                 else
                  i++;
              }
              document.getElementById("display").innerHTML = ("[ " +userNum + " ] is NOT a prime number <br> prime factors are: <br>" + tmpDisplay);

          }
        }
  }
  else
  {
    document.getElementById("display").innerHTML = "Invalid input, number must be greater than 1.";
  }

}

document.addEventListener('DOMContentLoaded', init);
