import inquirer from "inquirer";

//Asking questions from user through inquirer

let answers = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Square", "Cube"],
    },
]); 
console.log(answers);

// Conditional statements
if (answers.operator === "Addition") {
    console.log("Your value is", answers["firstNumber"] + answers["secondNumber"]);
}
else if (answers.operator === "Subtraction") {
    console.log("Your value is", answers["firstNumber"] - answers["secondNumber"]);
}
else if (answers.operator === "Multiplication") {
    console.log("Your value is", answers["firstNumber"] * answers["secondNumber"]);
}
else if (answers.operator === "Division") {
    console.log("Your value is", answers["firstNumber"] / answers["secondNumber"]);
} 
else if(answers.operator === "Square") {
    console.log("Your value is", answers["firstNumber"] **2);
}
else if(answers.operator === "Cube") {
    console.log("Your value is", answers["firstNumber"] **3);
}

