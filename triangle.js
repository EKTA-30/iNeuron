function typeOfTriangle(sideA,sideB,sideC){
    if(sideA === sideB && sideB === sideC)
        return "Equilateral";
    else if (sideA === sideB || sideB === sideC || sideA === sideC)
        return "Isosceles";
    else
        return "Scalene"
}

console.log(typeOfTriangle(1,2,3));