# website-thaicamp-muaythai

Gustavo Bastos - 10735538
Lucas Kunio - 10735597

Processo de Ideação:
Nosso projeto nasceu a partir da identificação de uma necessidade real: a ausência de uma presença digital estruturada para o estudio de muay thai de um conhecido . A partir disso, pensamos em criar um site funcional e atrativo que não apenas apresentasse a academia, mas também facilitasse a comunicação com alunos, e potenciais clientes. A ideação conta com funcionalidades que pudessem valorizar a experiência do usuário, como horários de aulas, informações sobre professores, planos disponíveis e contato direto.

Por que é um projeto extensionista:
Este trabalho se caracteriza como um projeto extensionista porque promove a aplicação prática do conhecimento acadêmico em benefício da sociedade e de uma comunidade específica. Ao desenvolver o site, estamos ampliando a visibilidade da academia, fortalecendo seu posicionamento no mercado local e, consequentemente, contribuindo para o crescimento de um pequeno empreendimento. Assim, geramos impacto social ao ajudar a empresa a se expandir, atrair novos alunos e consolidar a prática esportiva como ferramenta de inclusão, saúde e bem-estar.


Tutorial — Funcionamento do Site em HTML e CSS

Estrutura comum (todas as páginas)
	•	<!DOCTYPE html> → indica que o documento é HTML5.
	•	<html lang="pt-BR"> → define que o idioma do conteúdo é português do Brasil.
	•	<head> → cabeçalho invisível:
	•	<meta charset="UTF-8"> → permite uso de acentos.
	•	<meta name="viewport" content="width=device-width, initial-scale=1.0"> → torna a página responsiva em celulares.
	•	<title> → título que aparece na aba do navegador.
	•	<link rel="stylesheet" href="arquivo.css"> → conecta o CSS que dá estilo ao site.
	•	<body> → tudo o que o usuário vê está dentro dele.

⸻

Página Inicial (index.html + styles.css)

Cabeçalho (<header>)
	•	<header class="header"> → faixa azul no topo.
	•	<span class="logo"> → contém a logo.
	•	<img src="...logo.jpeg" class="logo"> → mostra a imagem da marca.
	•	<nav class="nav"> → menu de navegação.
	•	<a href="index.html">Início</a> → leva para a própria página inicial.
	•	<a href="planos.html">Planos</a> → leva para a página de planos.
	•	<a href="contato.html">Contato</a> → leva para a página de contato.

Seção do Professor (<main>)
	•	<main> → parte principal do conteúdo.
	•	<section class="professor"> → bloco com duas colunas:
	•	Texto (<section class="texto1">):
	•	<h1> → título principal.
	•	<p> → parágrafos explicativos.
	•	<a href="contato.html" class="botao-contato">Agendar Aula Experimental</a> → link estilizado como botão que leva para contato.
	•	<a href="planos.html" class="botao-planos">Ver Planos</a> → link estilizado como botão que leva para planos.
	•	Imagem (<figure class="gui-bastos">):
	•	<img src="...gui bastos.jpg" alt="Professor de Muay Thai"> → mostra a foto.
	•	<p>Professor Guilherme Bastos.</p> → legenda.

Sobre a Academia
	•	<section class="about"> → introduz o bloco sobre a academia.
	•	<h2> → subtítulo.
	•	<section class="cards"> → agrupa cartões informativos.
	•	<article class="card"> → cada cartão tem:
	•	<h3> → título (ex.: “Treinadores Profissionais”).
	•	<p> → texto explicativo.

Rodapé
	•	<footer class="footer"> → rodapé azul.
	•	<p>&copy; 2025 ThaiCamp</p> → direitos autorais.

⸻

Página de Planos (planos.html + planos.css)

Cabeçalho
	•	Mesmo da página inicial: logo + menu de navegação.

Lista de Planos
	•	<main> → conteúdo principal.
	•	<section class="cards"> → agrupa os planos.
	•	<article class="card">:
	•	<h3> → nome do plano (ex.: “2x na semana”).
	•	<p> → preços (mensal/semestral).
	•	<button class="botao2">Escolher Plano</button> → botão de ação.

Rodapé
	•	<footer class="footer"><p>&copy; 2025 ThaiCamp</p></footer>

⸻

Página de Contato (contato.html + contato.css)

Cabeçalho
	•	Igual às outras páginas.

Formulário
	•	<main> → conteúdo central.
	•	<section class="texto1"> → título e texto introdutório.
	•	<section class="formulario"> → contém o formulário.
	•	<form> → formulário de envio.
	•	<label for="nome">Nome:</label>
	•	<input id="nome" type="text" required> → campo de nome.
	•	<label for="email">E-mail:</label>
	•	<input id="email" type="email" required> → campo de e-mail.
	•	<label for="mensagem">Mensagem:</label>
	•	<textarea id="mensagem" required></textarea> → campo de mensagem.
	•	<button type="submit" class="botao1">Enviar</button> → botão que tentaria enviar os dados.
	•	Obs.: sem programação de back-end, o botão não envia nada de fato.

Rodapé
	•	<footer class="footer"><p>&copy; 2025 ThaiCamp</p></footer>

⸻

CSS (resumo do que cada classe faz)
	•	.header → faixa azul no topo, com logo e menu alinhados via flexbox.
	•	.logo → define tamanho da imagem da marca.
	•	.nav a → links brancos com espaçamento; mudam de estilo no hover.
	•	.professor → organiza a parte de texto e imagem lado a lado.
	•	.texto1 → formata os blocos de texto.
	•	.botoes, .botao-contato, .botao-planos → transformam links em botões estilizados.
	•	.gui-bastos → centraliza e limita a foto do professor.
	•	.about, .cards, .card → criam os cartões (fundo claro, borda, espaçamento).
	•	.plans-hero → seção inicial da página de planos.
	•	.botao1, .botao2 → botões estilizados com cores e efeitos.
	•	.formulario → centraliza o formulário e ajusta campos.
	•	.footer → rodapé azul com texto centralizado.
	•	@media (max-width: 768px) → deixa tudo responsivo: textos e imagens empilham no celular.
