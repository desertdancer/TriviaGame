$(document).ready(function () {
    var result = ["true", "false", "true", "false", "true"]
    var counter = 60
    var timer;
    var correct = 0
    var incorrect = 0
    var unanswered = 0
    $("#questions").hide()
    $("#results").hide()

    $("#game").on("click", function () {

        console.log("start")

        $("#start").hide()
        $("#questions").show()
        // start the timer
        timer = setInterval(countdown, 1000)

        function countdown() {
            counter--
            //counter = counter - 1
            $("#countdownTimer").text(counter)
            if (counter === 0) {
                console.log("time out")
                results()
                // go to results
            }
        }

        $("#done").on("click", function () {
            console.log("DONE")
            // stop the timer
            // get the responses
            // hide the questions 
            // show the results
            results()


        })

        function results() {
            console.log("RESULTS")
            clearInterval(timer)


            var input = $("#questions").children("input:checked")
            console.log(input)
        
            for (var i = 0; i < input.length; i++) {
                var name = parseInt($(input[i]).attr("name"))
                var val = $(input[i]).val()
                console.log("-->", name, val)
                if (result[name - 1 ] === val){
                    correct++
                }else{
                    incorrect++
                }
            }

            unanswered = 5 - correct - incorrect
            console.log(correct, incorrect, unanswered)
            $("#questions").hide()
            $("#correct").text(correct)
            $("#incorrect").text(incorrect)
            $("#notanswered").text(unanswered)
            $("#results").show()
        }
    })


})