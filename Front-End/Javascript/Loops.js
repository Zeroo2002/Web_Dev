console.log("Connected")

// for | foreach | while | do-while


// //for loop

for(i=0; i<10; i++){
    console.log(i)
}

//printing elements of an array

const numbers = [12, 23, 35, 52, 66]

for(var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//printing all the even numbers form the list

for(var i=0; i<numbers.length; i++){
    console.log((numbers[i]%2==0));
}

//          or

const g = [1,2,3,4,5,6]
for(var i=0; i<g.length; i++){
    if(g[i]%2==0){
        console.log(g[i])
    }
}


//while Loop

var j = 100
while(j<g.length){
    console.log(g[j]);
    j++
}

//do while loop

do{
    console.log(g[j]);
    j++
}
while(j<g.length);


//Assignment: all the even numbers between 20 to 50

while(i=20&i<51){
    console.log(i%2==0);
    i++;
}