console.log(hello); //output='world'                                  
var hello = 'world';                                 

// var hello
// console.log(hello)
// hello='world'


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); 
}
// output= 'magnet

// var needle 
// function test(){
    //     var needle;
    //     console.log(needle);
    //     needle = 'magnet'
    // }
    // needle= 'haystack'
    // test();


var brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan); 
    // output= 'only okay', 'only okay'

    // var brendan
    //function print(){
    //        brendan = 'only okay';
    //        console.log(brendan);
    //    }
    //console.log(brendan)
    //brenden= 'super cool'

var food = 'chicken';
    console.log(food);
    eat();
    function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
    
    // output='chicken'; 'half-chicken'

// var food
// 
// function eat(){
    //     var food
    //     food = 'half-chicken';
    //     console.log(food);
    //     var food
    //     food =gone
    // }
    // food ='chicken'
    // console.log(food);
// eat();
    

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// output ="chicken" , "fish" , "chicken"

// var mean = function() {
    //     var food 
        // food = "chicken";
    //     console.log(food);
    //     var food
        // var food = "fish";
    //     console.log(food);
    // }
    // console.log(food);
    // mean();

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// output ='rock';"r&b";"disco"
// var genre
// genre = "disco";
// function rewind() {
//         genre = "rock";
//         console.log(genre);
//         var genre = "r&b";
//         console.log(genre);
//     }
// console.log(genre)
// genre = "disco"
// console.log(genre);
// rewind();

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// output='san jose', "seattle","burbank","seattle"

// var dojo
// function learn() {
//         var dojo
//         dojo = "seattle";
//         var dojo 
//         dojo = "burbank";
//         console.log(dojo);
//         console.log(dojo);
//     }
//     dojo = "san jose"
//     console.log(dojo);
//     console.log(dojo);
//     learn();

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// output='{chicago,65,true}';'{berkeley, 0,"closed for now"}'
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
//     }
//     console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));




