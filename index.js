function readText(){
  let input_text = document.getElementById("text_inputtext").value;
  let input_question = document.getElementById("question_field").value;
  document.getElementById("predicted_answers").innerText = "Running the neural net to get your answer...\n";
  runQnaModel(input_question, input_text, printAnswer);
}

function set_mock_question(){
  document.getElementById("question_field").innerText = "Who helped with the breeding of Scottish Fold cats?";
}

function set_mock_text(){
  input_text = `The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susie's ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in the United Kingdom in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years — 42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene.`;
  document.getElementById("text_inputtext").innerText = input_text;
}

function printAnswer(answers){
  all_answers_concat = "Predicted answers:<br><br>";
  for (let i = 0; i < answers.length; i++){
     all_answers_concat += "- Answer: ".bold() + "\"" + answers[i].text + "\", " + "score: ".bold() + answers[i].score.toFixed(2) + "<br>";
  }
  document.getElementById("predicted_answers").innerHTML = all_answers_concat;
}

function runQnaModel(question, text, print_answer) {
  qna.load().then((model) => {
    model.findAnswers(question, text).then(answers => {
      printAnswer(answers);
    });
  });
}

set_mock_question();
set_mock_text();
