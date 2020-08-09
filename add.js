function result(){
    var score = 0
    var right_answer_1 = document.getElementById("q-1a-1");
    var q1_anwser_2 = document.getElementById("q-1a-2");
    var q1_anwser_3 = document.getElementById("q-1a-3");
    var q1_anwser_4 = document.getElementById("q-1a-4");
    if (right_answer_1.checked == true) {
        score ++
        alert('Q1 Answer Is Right')
 }
 else{
     alert('Q1 Answer Is Wrong')
 }

//  Q2
    var q2_anwser_1 = document.getElementById("q-2a-1");
    var q2_anwser_2 = document.getElementById("q-2a-2");
    var right_answer_3 = document.getElementById("q-2a-3");
    var q2_anwser_4 = document.getElementById("q-2a-4");
    if (right_answer_3.checked == true) {
        score++
        alert('Q2 Answer Is Right')
    }
    else {
        alert('Q2 Answer Is Wrong')
    }

// Q3    
    var q3_anwser_1 = document.getElementById("q-3a-1");
    var q3_anwser_2 = document.getElementById("q-3a-2");
    var right_answer_3 = document.getElementById("q-3a-3");
    var q3_anwser_4 = document.getElementById("q-3a-4");
    if (right_answer_3.checked == true) {
        score++
        alert('Q3 Answer Is Right')
    }
    else {
        alert('Q3 Answer Is Wrong')
    }

    // Q4    
    var q4_anwser_1 = document.getElementById("q-4a-1");
    var right_answer_2 = document.getElementById("q-4a-2");
    var q4_anwser_3 = document.getElementById("q-4a-3");
    var q4_anwser_4 = document.getElementById("q-4a-4");
    if (right_answer_2.checked == true) {
        score++
        alert('Q4 Answer Is Right')
    }
    else {
        alert('Q4 Answer Is Wrong')
    }

    // Q5    
    var q5_anwser_1 = document.getElementById("q-5a-1");
    var right_answer_2 = document.getElementById("q-5a-2");
    var q5_anwser_3 = document.getElementById("q-5a-3");
    var q5_anwser_4 = document.getElementById("q-5a-4");
    if (right_answer_2.checked == true) {
        score++
        alert('Q5 Answer Is Right')
    }
    else {
        alert('Q5 Answer Is Wrong')
    }

    // Q6    
    var q6_anwser_1 = document.getElementById("q-6a-1");
    var q6_anwser_4 = document.getElementById("q-6a-2");
    var right_answer_3 = document.getElementById("q-6a-3");
    var q6_anwser_4 = document.getElementById("q-6a-4");
    if (right_answer_3.checked == true) {
        score++
        alert('Q6 Answer Is Right')
    }
    else {
        alert('Q6 Answer Is Wrong')
    }

    alert('Your Score Is ' + score)
}