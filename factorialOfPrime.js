function printFactorialOfPrime(start, end){
        for(let i=start;i<=end;i++){
            if(isPrime(i)){
                printFactorial(i);
            }
        }
     
}


function isPrime(num){
    if(num==1)
    return false;
    for(let i =2;i*i <= num;i++){
        if(num%i==0)
        return false;
    }
    return true;
}

function printFactorial(num){
    let fact =1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    console.log(num,fact);
}

printFactorialOfPrime(1,100);