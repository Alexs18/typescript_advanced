/**To make diference functions in typescript
 * you make of diference ways
 */

/**EXAMPLE */

/**Whithout params */
const plusnumer: ()=> number =()=>{
    return 23
}

/**with params */

const implicitefunction :(m:string, c:number)=> number | string =(msg:string,codestatus:number)=>{
    if(msg === 'success'){
        return 'you have success in this process' 
    }
    if(codestatus === 200){
        return 'response code is rigth'
    }
    return 'the process it ll with mistakes'
}

/**Like a function without const */
const enum ResponsesCode{
    success=    'success',
    loading=    'loading',
    error  =    'error'
}
function CheckCodeResponse(coderesponse:ResponsesCode):boolean{
    console.log('text');
    console.log(coderesponse);
    return true    
}

const coderesponde1:ResponsesCode = ResponsesCode.error

CheckCodeResponse(coderesponde1)

/**you make another fuction returning a value like neves to trow an
 * exeption 
 * EXAMPLE
 */

function checkstate(state:ResponsesCode):never{
    if (state === ResponsesCode.error) {
        throw new Error('this is the mistake') 
    }
    throw new Error('Without exeption') 
}


checkstate(coderesponde1);