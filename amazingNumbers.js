


function getNumber() {
    var number = document.getElementById('userInput').value;

    if (number < 0)
    {
      document.getElementById("notFoundMessage").innerHTML = "Please enter a positive number."
    }

    else
    {
          $.get('http://numbersapi.com/'+number+'?json', function(data)
          {
            if (data.found === false)
            {
                document.getElementById("notFoundMessage").innerHTML = "This number has not been found."
                $.get('http://numbersapi.com/'+number+'?notfound=floor',function(data2){
                  $('#displayNumberInformation').text(data2);
                });
                document.getElementById("tips").style.display = "none";
            }

            else
            {
              document.getElementById("notFoundMessage").style.display = "none";
              $('#displayNumberInformation').text(data.text);
              document.getElementById("tips").style.display = "block";
            }

          });
    }



}



function randomNumber() {

    document.getElementById("tips").style.display = "none";
    document.getElementById("userInput").value = "";
    var random = Math.random() * (1000 - 0 + 1) + 0;
    var integerrandom = Math.ceil(random);



      $.get('http://numbersapi.com/'+integerrandom+'?json', function(data)
      {

        if (data.found === false)
        {
            $.get('http://numbersapi.com/'+integerrandom+'?notfound=floor',function(data2){
              $('#displayNumberInformation').text(data2);
            });
        }

        else
        {
          $('#displayNumberInformation').text(data.text);
        }

      });

}



function getDate() {
    var month = document.getElementById('inputMonth').value;
    var day = document.getElementById("inputDay").value;

    if (month < 1 || month > 12)
    {
      document.getElementById("notFoundMessage2").innerHTML = "Please enter a valid month (from 1 to 12).";
    }
    else if (month == 2)
    {
        if (day > 27 || day < 1)
        {
          document.getElementById("notFoundMessage2").innerHTML = "Please enter a day between 1 and 27.";
        }
    }
    else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
    {
        if (day > 31 || day < 1)
        {
          document.getElementById("notFoundMessage2").innerHTML = "Please enter a day between 1 and 31.";
        }
    }
    else
    {
      if (day > 30 || day < 1)
      {
        document.getElementById("notFoundMessage2").innerHTML = "Please enter a day between 1 and 30.";
      }
    }

    var date = month + "/" + day;

     $.get('http://numbersapi.com/'+date+'/date?json', function(data)
      {
        if (data.found === false)
        {
            document.getElementById("notFoundMessage2").innerHTML = "This date has nothing amazing."
            $.get('http://numbersapi.com/'+date+'?notfound=floor',function(data2){
              $('#displayDateInformation').text(data2);
            });
            document.getElementById("tips2").style.display = "none";
        }

      else
        {
          document.getElementById("notFoundMessage2").style.display = "none";
          $('#displayDateInformation').text(data.text);
          document.getElementById("tips2").style.display = "block";
        }

    });
}


function randomDate() {
    document.getElementById("tips2").style.display = "none";
    document.getElementById("inputMonth").value = "";
    document.getElementById("inputDay").value = "";

    var month = Math.floor(Math.random() * 12 + 1);
    var day = Math.floor(Math.random() * 28 + 1);

    var randomDate = month + "/" + day;

    $.get('http://numbersapi.com/'+randomDate+'/date?json', function(data)
    {

      if (data.found === false)
      {
          $.get('http://numbersapi.com/'+randomDate+'/date?notfound=floor',function(data2){
            $('#displayDateInformation').text(data2);
          });
      }

      else
      {
        $('#displayDateInformation').text(data.text);
      }

  });

}


function getYear() {

  var year = document.getElementById('inputYear').value;

  if(year > 2050 || year < 1)
  {
    document.getElementById('notFoundMessage3').innerHTML = "Please enter a year after 1 and before 2050."
  }

  else
  {
          $.get('http://numbersapi.com/'+year+'/year?json', function(data)
        {
          if (data.found === false)
          {
              document.getElementById("notFoundMessage3").innerHTML = "This year has nothing amazing."
              $.get('http://numbersapi.com/'+year+'?notfound=floor',function(data2){
                $('#displayYearInformation').text(data2);
              });
              document.getElementById("tips3").style.display = "none";
          }

          else
          {
            document.getElementById("notFoundMessage3").style.display = "none";
            $('#displayYearInformation').text(data.text);
            document.getElementById("tips3").style.display = "block";
          }

        });
  }

}


function randomYear() {
    document.getElementById("tips3").style.display = "none";
    document.getElementById("inputYear").value = "";

    var randomYear = Math.floor(Math.random() *2050  + 1);

    $.get('http://numbersapi.com/'+randomYear+'/year?json', function(data)
    {

      if (data.found === false)
      {
          $.get('http://numbersapi.com/'+randomYear+'/year?notfound=floor',function(data2){
            $('#displayYearInformation').text(data2);
          });
      }

      else
      {
        $('#displayYearInformation').text(data.text);
      }

  });

}


function getMathNumber() {

    var numberMath = document.getElementById('inputMath').value;

    if (numberMath < 0)
    {
      document.getElementById("notFoundMessage4").innerHTML = "Please, enter a positive number."
    }

    else
    {
          $.get('http://numbersapi.com/'+numberMath+'/math?json', function(data)
          {
            if (data.found === false)
            {
                document.getElementById("notFoundMessage4").innerHTML = "This number has no particular properties."
                $.get('http://numbersapi.com/'+numberMath+'/math?notfound=floor',function(data2){
                  $('#displayMathInformation').text(data2);
                });
                document.getElementById("tips4").style.display = "none";
            }

            else
            {
              document.getElementById("notFoundMessage4").style.display = "none";
              $('#displayMathInformation').text(data.text);
            }

          });

        document.getElementById("tips4").style.display = "block";
    }

}



function randomMathNumber() {

    document.getElementById("tips4").style.display = "none";
    document.getElementById("inputMath").value = "";
    var random = Math.random() * (10000 - 0 + 1) + 0;
    var integerrandom = Math.ceil(random);



      $.get('http://numbersapi.com/'+integerrandom+'/math?json', function(data)
      {

        if (data.found === false)
        {
            $.get('http://numbersapi.com/'+integerrandom+'/math?notfound=floor',function(data2){
              $('#displayMathInformation').text(data2);
            });
            document.getElementById("tips4").style.display = "none";
        }

        else
        {
          $('#displayMathInformation').text(data.text);
        }

      });

}
