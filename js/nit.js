class Student{
    constructor(name, source,image){
        this.name = name;
        this.source = source;
        this.image = image;
    }
}

const student1 = new Student("Men Clothing","Source Now", "images/bag.jpg");
const student2 = new Student("Men Clothing","Source Now", "images/1.jpg");
console.log(student1,student2)
document.getElementById("men-cloth").innerHTML = student1.name
document.getElementById("sourceBtn").innerHTML = student1.source
document.getElementById("popular-image").setAttribute("src", student1.image)

document.getElementById("men-cloth").innerHTML = student2.name
document.getElementById("sourceBtn").innerHTML = student2.source
document.getElementById("popular-image").setAttribute("src", student2.image)

