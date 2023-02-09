dropDown();

function show(){                                //aplica a classe de formatacao
    let list=document.getElementById("list");
    let active=list.className;
    //se estiver desativado, ativa. Se estiver ativado, desativa.
    if(active=="" || active==null || active==undefined){
        list.className="active";
    }
    else{
        list.className="";
    }
}
function dropDown(){
    let width=window.innerWidth;                //verifica o tamanho da visualizacao(janela)
    let logo=document.getElementById("logo");
    if(width <= 620){                           //se for menor ou igual a 620px, habilita o botao
        console.log("entrou")
        logo.addEventListener('click',show)
    }
    else{
        logo.removeEventListener('click',show); //caso contrario, desabilita o botao
    }
}
