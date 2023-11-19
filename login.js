var a=0;
function validateAndSubmit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    

    if (username === 'matheus' && password === '12345') {
      alert('Login bem-sucedido! Redirecionando para a página principal...');
      window.location.href ='index (1).html';
    } else  {
      alert('Nome de usuário ou senha incorretos. Tente novamente.');
      a++;
      
    if (a==3){
        $('#button').hide();
      }
      

      
      
    }
  }