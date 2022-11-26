function functionName() {
    document.getElementById("answer_second").textContent = "";
    var first = document.getElementById('id_first').value;
    var second = document.getElementById('id_second').value;
    var third = document.getElementById('id_third').value;
    var fourth = document.getElementById('id_fourth').value;

    let answer_second = 0.0;
    
    if (parseFloat(first) < 120)
        answer_second += 2;

    if (parseFloat(second) > 120)
        answer_second += 3;

    if (parseFloat(third) > 5)
        answer_second += 2;

    if (parseFloat(fourth) < 40)
        answer_second += 2;

    if (document.getElementById('gridRadios3').checked == true)
        answer_second += 2;

    if (document.getElementById('gridRadios5').checked == true)
        answer_second += 3;

    if (document.getElementById("selectFirst").value == "4")
        answer_second += 8;

    if (document.getElementById('gridRadios9').checked == true)
        answer_second += 6;
    
    if (document.getElementById("answer_second").textContent == "") {
        if (answer_second <= 13)
            document.getElementById("answer_second").textContent = "Итоговые баллы: " + answer_second + " - низкая внутрибольничная летальность";
        else
            document.getElementById("answer_second").textContent = "Итоговые баллы: " + answer_second + " - высокая внутрибольничная летальность";
    }
}
