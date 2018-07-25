
const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});


console.log(process.argv);
process.argv.forEach(function (val, index, array) {
 console.log(index + ': ' + val);
});

    rl.question('Question 1 ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('Question 2', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('Question 3', (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);
                rl.question('Question 4', (answer) => {
                    console.log(`Thank you for your valuable feedback: ${answer}`);
                    rl.question('Question 5', (answer) => {
                        console.log(`Thank you for your valuable feedback: ${answer}`);
                        rl.close();
                       });
                   });
               });
           });
       });
      




function questionsDone() {
    var fs = require('fs');
    fs.writeFile("package.json", answer, (err) => {
        if (err) throw err;
        console.log("The file was successfully saved!");
    });
}