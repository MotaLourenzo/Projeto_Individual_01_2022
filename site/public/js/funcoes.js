// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}



function logar () 
{
    let email = in_email.value;
    let senha = in_senha.value;


    if(email == '' || senha == '')
    {
        
    }
    else
    {
        fetch('/usuarios/logar',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json' 
            },
            body : JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })

        })
        .then((resultado)=>{
            console.log('Resultado:' + resultado)
            if (resultado.ok)
            {
                resultado.json().then(json=>{
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.FK_CULINARIA = json.fkCulinaria;
                    console.log('Tudo certo')
                    window.location = './dashboard/cards.html';
                })
            }
            else
            {
                alert('Senha ou usuário inválidos');
            }
        })
        .catch((erro)=>{
            console.log(erro)
            console.log('Deu ruim')
        })
        return 0;
    }        
}

function votar ()
{

    alert(1);
    let fkCulinaria = sel_culinaria.value
    let idUsuario = sessionStorage.ID_USUARIO;

    if(fkCulinaria == '')
    {
        alert('Escolha um tipo culinária');
    }
    else if(idUsuario == '')
    {
        alert('O id do usuário não existe');
    }
    else
    {

            fetch("/usuarios/votar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fkCulinariaServer: fkCulinaria,
                    idUsuarioServer: idUsuario
                })
            }).then(function (resposta) {
                
                console.log("resposta: ", resposta);
                if (resposta.ok) {
                    
                    console.log('Tudo certo');
                    
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
            
            return false;
        
    }
}

function cadastrar() {

    let nomeVar = in_nome.value;
    let emailVar = in_email.value;
    let senhaVar = in_senha.value;

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);
        if (resposta.ok) {

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}