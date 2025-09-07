// Abstract class: College
class College {
    enrollStudent() {
        throw "You must implement enrollStudent() in your own college class!";
    }
}

// Derived class: EngineeringCollege
class EngineeringCollege extends College {
    enrollStudent() {
        console.log("Engineering student enrolled successfully!");
    }
}

// Derived class: MedicalCollege
class MedicalCollege extends College {
    enrollStudent() {
        console.log("Medical student enrolled successfully!");
    }
}

// Usage
let eng = new EngineeringCollege();
eng.enrollStudent(); 

let med = new MedicalCollege();
med.enrollStudent(); 
