
{ // Exercise 1
    // Part 1
    const queueBank = ["Sofia", "David", "Juan"];
    console.log(queueBank);

    // Part 2
    queueBank.push("Sara", "Augustin")
    queueBank.shift();
    console.log(queueBank);

    // Part 3
    queueBank.splice(1, 0, "Renata");
    queueBank.push('Elena');
    console.log(queueBank);
}

{// Exercise 2
    // const starList = [];
    // for (i = 0; i < 5; i++) {
    //     starList.push("*");
    //     console.log(starList);
    // }

    // using nested loops
    for ( i=1; i<=5; i++) {
        let line = "";        
        for (n=0; n<i; n++) {
            line += "*"; 
        }	
        console.log(line);
    }
}

{ // Exercise 3

    // part 1
    let xValue = 5;
    while (xValue >= 0.5) {
        console.log(xValue);
        xValue -= 0.5;
    }

    // part 2
    let numA = 0;
    while (numA < 100) {
        numA++;
        if ((numA % 2) != 0) {
            console.log(numA);
        }
    }

    // part 3
    let i = 1, n = 6;
    while (i <= n) {
        console.log(`[ ${i} ]`);
        i++;
    }

    // part 4
    let i = 0, n = 19, sum = 0;
    while (i <= n) {
        sum += i;
        i++;
    }
    console.log(sum);
}
