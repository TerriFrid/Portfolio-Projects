//General Functions

$(function () {
    $(".numOnly").on("keypress", function (e) {
        if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            return false;
       };
    });
});

function containsValues(strName, nbrQuantity) {
    let arrValues = new Array();
    let strTarget = "";
    for (let i = 1; i <= nbrQuantity; i++) {
        strTarget = strName + i;
        strValue = $('#' + strTarget).val();
        if (strValue.trim().length > 0) {
            arrValues.push(Number(strValue));
        }
    }
    return arrValues;

};

//trying out git hub

//End General Functions


//Fizz Buzz Code
$("#btnFizzBuzzCalc").on("click", function () {
    // needs input validation
    //Step 1: Get user input

    let arrayResults = new Array()
    arrayResults = FizzBuzz(Number($("#first").val()), Number($("#second").val()))
    $("#outputFizzBuzz").html(arrayResults.join(", "));

    function FizzBuzz(num1, num2) {

        let arrOutput = []

        for (i = 1; i < 101; i++) {

            if (Number.isInteger(i / num1) && Number.isInteger(i / num2)) {
                arrOutput.push("<span class='fizzbuzz'>FizzBuzz</span>");
            } else if (Number.isInteger(i / num1)) {
                arrOutput.push("<span class='fizz'>Fizz</span>");
            } else if (Number.isInteger(i / num2)) {
                arrOutput.push("<span class='buzz'>Buzz</span>");
            }
            else {
                arrOutput.push(i);
            }
        }
        return arrOutput
    }    
});

$("#btnFizzBuzzClear").on("click", function () {
    $(".clearMe").val("");
    $("#outputFizzBuzz").text("");
});

$("#btnFizzBuzzShow").on("click", function () {
    $("#codeFizzBuzz").toggle();

    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});
//End FizzBuzz Code
//Tacocat Code
$("#btnReverse").on("click", function () {
    let wordOriginal = $("#word").val().toLowerCase();
    let wordTrimmed = wordOriginal.replace(/\s/g, "");

    if ($("#word").val() == "") {
        alert("Please enter a value.")
    } else {
        wordTrimmed = wordTrimmed.match(/[1-9 a-z]/g).join("")
        let wordReversed = wordTrimmed.split("").reverse().join("")
        let palindrome = isPalindrome(wordTrimmed, wordReversed);

        $("#outputTacoCat").html(`${wordOriginal} reversed is ${wordReversed} <br> ${palindrome}`);
    }
    
function isPalindrome(str1, str2) {

        if (str1 == str2) {
            return "It is a palindrome"
        } else { return "It is not a palindrome" }
    }

});
$("#btnTacoCatClear").on("click", function () {
    $(".clearMe").val("");
    $("#outputTacoCat").text("");
});
$("#btnTacoCatShow").on("click", function () {
    $("#codeTacoCat").toggle();

    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});
//End TacoCat Code
//Sunset Hills
$("#btnSunsetCalc").on("click", function () {

    let arrayHeights = new Array();

    arrayHeights = containsValues("Sunset",6)
    
    //confirm 2 or more values entered
    if (arrayHeights.length < 2) {
        alert("Please enter 2 or more numbers.");
    } else {
       
        let nbrMaxHeight = arrayHeights[0];
        let arraySunsetViews = [];
      
       arraySunsetViews.push(`The building in position 1 with height ${nbrMaxHeight} can see the sunset. <br>`);

        for (i = 1; i < arrayHeights.length; i++) {
            if (arrayHeights[i] > nbrMaxHeight) {
                nbrMaxHeight = arrayHeights[i];
                arraySunsetViews.push(`The building in position ${i + 1} with height ${nbrMaxHeight} can see the sunset. <br>`);
            }
        }
        $("#outputSunset").html(` ${arraySunsetViews.length} buildings can see the sunset <br> ${arraySunsetViews.join("")}`);
    }  
});

$("#btnSunsetClear").on("click", function () {
    $(".clearMe").val("");
    $("#outputSunset").text("");
});

$("#btnSunsetShow").on("click", function () {
    $("#codeSunset").toggle();

    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});


//Sum of All Fears Code
$("#btnSumFearCalc").on("click", function () {
    let arrayNumbers = new Array();
    arrayNumbers = containsValues("SumFear", 6);

    //test to see if user entered 2 or more numeric values
    if (arrayNumbers.length < 2) {
        alert("Please enter 2 or more numbers");
        //need to set focus back on input

        //confirm valid number entered
    } else if ($("#nbrCheck").val() == "") {
        alert("Please enter a summation number");
        //put focus on input
    }
    else {
        // let strResults = doSumsMatch(arrayNumbers, $("#nbrCheck").val())
        let arrayResults = new Array();
        arrayResults = doSumsMatch(arrayNumbers, $("#nbrCheck").val());
       
        if (arrayResults[0] == 0) {
            $("#outputSumFear").html(`No two numbers add up to ${K}`);
        } else {
            $("#outputSumFear").html(`${arrayResults.join("")}`);
        }        
    }
       
    //this function checks to see if 2 values equal the requested sum
    function doSumsMatch(arr, K) {

        let arrPairs = new Array();
        
        //check each number in the array except the last number.  We don't need to check the last number because all 
        // possible combination would have already been tried in previous iteration
        for (let i = 0; i < arr.length - 1; i++) {
            for (j = i + 1; j < arr.length; j++) {
                if (K == Number(arr[i]) + Number(arr[j])) {
                    arrPairs.push(`${arr[i]} + ${arr[j]} = ${K} <br>`);
                }
            }
        }
    return arrPairs;
    }   
});

$("#btnSumFearClear").on("click", function () {
    $(".clearMe").val("");
    $("#outputSumFear").text("");
});
$("#btnSumFearShow").on("click", function () {
    $("#codeSumFear").toggle();

    let btnText = $(this).text();
    $(this).text($(this).text().startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});