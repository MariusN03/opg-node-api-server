let dinfardiv = document.querySelector('#dinfar')
let dinmordiv = document.querySelector('#dinmor')
dinfardiv.style.top = '90vh'
dinmordiv.style.top = '80vh'
document.querySelector('#dinfar h2').addEventListener('click', ()=>{
    if(dinfardiv.style.top == '90vh'){
        dinfardiv.style.top = 0
    }
    else{
        dinfardiv.style.top = '90vh'
    }
})
document.querySelector('#dinmor h2').addEventListener('click', ()=>{
    if(dinmordiv.style.top == '80vh'){
        dinmordiv.style.top = 0
    }
    else{
        dinmordiv.style.top = '80vh'
    }
})

document.querySelector('#submitD').addEventListener('click', ()=>{
    fetch('http://10.78.66.27:2650/api/dinfar')
        .then(res => res.json())
            .then(json => document.querySelector('#dinfar .json').innerHTML = JSON.stringify(json))
})
document.querySelector('#submitD').addEventListener('click', ()=>{
    fetch('http://10.78.66.27:2650/api/dinmor')
        .then(res => res.json())
            .then(json => document.querySelector('#dinmor .json').innerHTML = JSON.stringify(json))
})