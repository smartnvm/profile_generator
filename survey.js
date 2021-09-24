// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

survey = {
  q1: "What's your name? Nicknames are also acceptable :)",
  q2: "What's an activity you like doing?",
  q3: "What do you listen to while doing that?",
  q4: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  q5: "What's your favourite thing to eat for that meal?",
  q6: "Which sport is your absolute favourite?",
  q7: "What is your superpower? In a few words, tell us what you are amazing at!"

}

let answers = []

// const ask = () {

//   rl.question(q1)
// }

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });



rl.question(survey.q1, (answer) => {
  // TODO: Log the answer in a database
  answers.push(answer)

  //console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(survey.q2, (answer) => {
    answers.push(answer)

    rl.question(survey.q3, (answer) => {

      answers.push(answer)
      rl.question(survey.q4, (answer) => {

        answers.push(answer)

        rl.question(survey.q5, (answer) => {

          answers.push(answer)
          rl.question(survey.q6, (answer) => {

            answers.push(answer)
            rl.question(survey.q7, (answer) => {
              answers.push(answer)

              response = `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`

              console.log(response)
              rl.close();

            })

          })

        })
      })
    })
  })
})
