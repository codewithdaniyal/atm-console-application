import inquirer from "inquirer";
let myBalance = 300;
let myPin = 1234;
console.log("\n\tWelcome to Code With Daniyal - ATM MACHINE\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Login Successfully");
    console.log(`Your Balance is: , ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What would you like to do?",
            choices: ["Withdraw", "Deposit", "Exit"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter the amount to withdraw?"
            }
        ]);
        if (withdrawAns.withdraw > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= withdrawAns.withdraw;
            console.log(`${withdrawAns.withdraw} withdraw Succesfully`);
            console.log(`Your Remaning Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Deposit") {
        let depositAns = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "Enter the amount to deposit",
            },
        ]);
        myBalance += depositAns.deposit;
        console.log(`${depositAns.deposit} deposited successfully`);
        console.log(`Your new balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Exit") {
        console.log("Thank you for using Code With Daniyal - ATM MACHINE. Goodbye!");
    }
}
