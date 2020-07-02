<!DOCTYPE html>
<html>
 
<head>
<title>--Formulário Contato--</title>
<meta charset="utf-8" />
<!--   <link href="ContatoEstilo.css" rel="stylesheet" media="all" />
    <script src="JavaScript1.js"></script>-->
</head>
 
<body>
<form name="meu_form">
   
  <h1>Entre em contato</h1>
         
  <input type="text" id="nomeid" placeholder="" required="required" name="nome" />
  <label for="nome">Nome</label>
 
  <input type="tel" id="foneid" placeholder="" name="fone" />
  <label for="fone">Fone</label>
 
  <input type="email" id="emailid" placeholder="" name="email" />
  <label for="email">Email</label>
 
  <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" /> 
</form>
</body>
</html>