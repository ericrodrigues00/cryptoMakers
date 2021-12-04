var codificar = document.getElementById("codificar")
var descodificar = document.getElementById("decodificar")
var botao = document.getElementById("enviar")
var textoMostrar = document.getElementById("mensagem")
var chave = document.querySelector("#numberChave")
let criptoSelector = document.querySelector("#criptoSelector")


criptoSelector.addEventListener('change', () => {
    if(criptoSelector.value === "1"){
        chave.classList.remove("hide")
    }else{
        chave.classList.add("hide")
    }
})

codificar.addEventListener("click", function(){
    botao.innerText = "Codificar"
    })
    

decodificar.addEventListener("click", function(){
    botao.innerText = "Decodificar"
    }
)

botao.addEventListener("click", function(e) {
    
    e.preventDefault()
    let criptografiaEscolhida = document.querySelector("#criptoSelector").value
    console.log(criptografiaEscolhida) 
   let selectedOption = document.getElementsByName("funcBtn")
   var texto = document.querySelector("#textUser")
   
   var valorChave = parseInt(chave.value)  
    if(criptografiaEscolhida == 0){
        alert("Por favor, selecione a criptografia desejada")
        
    }else if(criptografiaEscolhida == 1){
        
        if(valorChave > 25 || valorChave < 1){
            alert("Por favor, insira um valor entre 1 e 25")
        }else{
            if(selectedOption[0].checked){
                console.log("0")
                var criptoCode;
                var strCriptoCesar = ""
                
                var valorTexto = texto.value.toUpperCase() 
                
            
                    for(let z = 0; z<valorTexto.length;z++){
                        if(valorTexto.charCodeAt(z) === 32){
                            strCriptoCesar += String.fromCharCode(32)
                            continue
                        }
                        criptoCode = valorTexto.charCodeAt(z) + valorChave
                            if(criptoCode > 90){
                                criptoCode -= 90
                                criptoCode += 64
                            }
                        strCriptoCesar += String.fromCharCode(criptoCode)
                    }       
                    console.log(strCriptoCesar)
                    textoMostrar.innerText = `${strCriptoCesar}`
                }
            if(selectedOption[1].checked){
                    console.log("1")
                    var criptoCode;
                    var strCriptoCesar = ""
                    
                    var valorTexto = texto.value
                    valorTexto = valorTexto.toUpperCase()
                    
                
                        for(let z = 0; z<valorTexto.length;z++){
                            if(valorTexto.charCodeAt(z) === 32){
                                strCriptoCesar += String.fromCharCode(32)
                                continue
                            }
                            
                            criptoCode = (valorTexto.charCodeAt(z)) - valorChave
                                if(criptoCode< 65){
                                    criptoCode = 65 - criptoCode
                                    criptoCode = 91 - criptoCode
                                }
                            strCriptoCesar += String.fromCharCode(criptoCode)
                        }       
                        console.log(strCriptoCesar)
                        textoMostrar.innerText = `${strCriptoCesar}`
                    }
            }   
    }else if(criptografiaEscolhida == 2){
        
        if(selectedOption[0].checked){
            var valor64 = texto.value
            var texto64 = btoa(valor64)
            textoMostrar.innerText = `${texto64}`
        }
        if(selectedOption[1].checked){
            var valor64 = texto.value
            var texto64 = atob(valor64)
            textoMostrar.innerText = `${texto64}`
        }
    }else{
        alert("Um erro ocorreu, tente novamente")
    }
        } 
)
