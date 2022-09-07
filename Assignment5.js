// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr3
// where r is the radius

// 3) Cone- Volume= πr2h/3
// where r is the radius and h is the height of the cone.

class Cyliner{
    
    constructor(radius, height){
            this.radius = radius;
            this.height = height;
    }

    getVolume(){
        let volume =  parseFloat((Math.PI * Math.pow(this.radius,2) * this.height).toFixed(4));
        return volume;
    }
}

let objCylinder = new Cyliner(2,7);
console.log(`Volume of cylinder ${objCylinder.getVolume()}`);

class Sphere{
    constructor(radius){
        this.radius = radius;
    }
    getVolume(){
        let volume = parseFloat((4/3 * Math.PI * Math.pow(this.radius,3)).toFixed(4))
        return volume;
    }
}

let objSphere = new Sphere(3);
console.log(`Volume of Shere ${objSphere.getVolume()}`);


class Cone{
    constructor(radius, height){
        this.radius = radius;
        this.height =  height;
    }

    getVolume(){
        let volume = parseFloat(((Math.PI * Math.pow(this.radius,2)*this.height)/3).toFixed(4));
        return volume;
    }
}

let objCone = new Cone(7,3);
console.log(`Volume of cone ${objCone.getVolume()}`);