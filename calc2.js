reader.question("What would you like to calculate?", function(input){
    tokens = input.split(' ');

    mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);

    if (mathSymbol === "+"){
        console.log(num1 + num2)
    }
    if (mathSymbol === "-"){
        console.log(num1-num2)
    }
    if (mathSymbol === "*"){
        console.log(num1*num2)
    }
    if (mathSymbol === "/"){
        console.log(num1/num2)
    }
    if (mathSymbol === "root"){
        console.log(math.sqrt(num1)
    }
    console.log('mathSymbol', mathSymbol);
    console.log('num1', num1);
    console.log('num2', num2);

    reader.close()
});
