interface arraysinterface{
    numberarrays:number[],
    stringarrays:Array<string>,
    booleanarrays:boolean[]
}

let dataarrays:arraysinterface = {
    numberarrays:[1,2,34,5],
    stringarrays:['Alexis', 'Richar', 'Eimy'],
    booleanarrays:[true, false]
}

let sum:number = dataarrays.numberarrays.reduce((after:number, currect:number)=>{
    return after + currect
});
console.log(sum)
console.log(dataarrays);