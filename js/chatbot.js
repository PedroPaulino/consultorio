const appChatBot = document.getElementById("appChatBot");
function abrirChatBot(){

    console.log("Func pressionada");
   return appChatBot.innerHTML = ` 

    <div id="chatBot">
            <div class="telaChat">
                <div class="displayDeMensagens">
                    <div class="areaDoBot">
                        <div class="retrato">
                            <div class="fotoDoRetrato"> </div>
                        </div>
                        <div class="areaDeMensagemBot">
                            
                                <p class="mensagemBot"> </p>
                        
                            
                        </div>
                    </div>
                    <div id="areaDoCliente">
                      
                    </div>
                </div>
                <div class="teclado">
                    <input type="text""> <button onclick="enviarMensagem()"> Enviar </button>
                </div> 
            </div> 
        <button id="chatbotBotaoFechar" onclick="fecharChatBot()">X</button> 
    </div>
    
    `
    
    ;
}
function fecharChatBot(){
    return appChatBot.innerHTML = "";
}
function enviarMensagem(){
    var areaDoCliente = document.getElementById("areaDoCliente");
    return areaDoCliente.innerHTML = `
    <div class="areaDeMensagemCliente">
    <p class="mensagemCliente"> </p>
    </div>
    <div class="retrato">
        <div class="fotoDoRetrato">   </div>
    </div>
    `;
}