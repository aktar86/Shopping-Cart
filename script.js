
function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    // const caseNewCount = caseCount + 1;
    let productNewCount= productCount;
    if(isIncrease == true){
        productNewCount = productCount +1;
    }
    if ( isIncrease ==  false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1290;
    }
    if(product == 'case'){
        productTotal = productNewCount * 79;
    }
    document.getElementById(product + '-price').innerText = '$' + productTotal;

    document.getElementById('')
}




// function handleProductChange(isIncrease){
    //     const caseInput = document.getElementById('case-count');
    //     const caseCount = parseInt(caseInput.value);
    //     // const caseNewCount = caseCount + 1;
    //     let caseNewCount= caseCount;
    //     if(isIncrease == true){
    //         caseNewCount = caseCount +1;
    //     }
    //     if ( isIncrease ==  false && caseCount > 0){
    //         caseNewCount = caseCount - 1;
    //     }
    //     caseInput.value = caseNewCount;
    //     caseTotal = caseNewCount * 79;
    //     document.getElementById('case-price').innerText = '$' + caseTotal;
    // }
    
















// // case increase and decrease handler
// document.getElementById('case-increase').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     caseTotal = caseNewCount * 79;
//     document.getElementById('case-price').innerText = '$' + caseTotal;
// })
// // case decrease 
// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount= caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 79;
//     document.getElementById('case-price').innerText = '$' + caseTotal;
// })
