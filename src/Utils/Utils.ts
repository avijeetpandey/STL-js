/*
 Min , Max function ,  reverse_till , accumulate , count , next_permutation , distance , even , odd , isMultiple , isPower 
isAlphaNumeric , isVowel , isConsonant , isPrime , generate with parameters , make_triplets   
*/


// function to calculate minimum of two values
const min=(first:number,second:number)=>{
    if(first<second)
        return first
    return second
}

//function to calculate maximum of two values
const max=(first:number,second:number)=>{
    if(first>second)
        return first
    return second
}

// function to process reversing upto certain end points
const reverse_till=(item:Array<any>,end_point:number)=>{
    
}

// function to process accumulation of items inside a list
const accumulate=(item:Array<any>,initial_value : any=0)=>{
    for(let number of item)
        initial_value+=number
    return initial_value
}

// function to count occurences 
const count=(key:number,ls:any)=>{
    let c = 0
    for(let item of ls)
        if(item===key)
            c++;
    return c
}


/*  Common mathematical utility functions */

// function to check even
const isEven=(number : number)=>{
    if(number%2==0)
        return true
    return false
}

//function to check odd
const isOdd=(number: number)=>{
    return !isEven(number)
}

// function to check isMultiple of
const isMultipleOf=(first : number,second:number)=>{
    return first % second ==0 ? true : false
}

// function to check is prime
const isPrime=(number:number)=>{
    for(let i=2;i<number;i++){
        if(number%i===0)
            return false;

    }
    return true;
}

// function to square numbers
const square=(n : number)=> n*n


// function to make pythagorean triplets
const make_triplets=(n:number)=>{
    let a,b,c
    if(n%2===0){
       a =n
       b = (n/2 * n/2) + 1
       c = (n/2 * n/2 ) - 1
       return [a,b,c]
    }
     a = n
     b = (n*n/2 - 0.5)
     c = (n*n/2 + 0.5)
    return [a,b,c]
}

/* common character based utility functions */


export {
    isEven,
    isMultipleOf,
    isOdd,
    isPrime,
    max,
    min,
    square,
    accumulate,
    reverse_till,
    count,
    make_triplets
}