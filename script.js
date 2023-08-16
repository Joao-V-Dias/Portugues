const textosComentario = [
  "Contos curtos, quase poesias que descrevem o cotidiano do negro, da negra, do povo preto e suas passagens aonde go da história, revelando racismo, emponderamento, luta de classe entre outras discursivas.",
  "Excelentes poesias, emotivas e direto ao ponto",
  "Em Terra Negra, Cristiane Sobral cria uma narrativa poderosa que mergulha o leitor em reflexões profundas sobre identidade e ancestralidade, enquanto conduz a trama com uma prosa envolvente e emocionante.",
  "Sobre o livro, eu gostei,ele tem algumas expressões angolanas mas seus significados estão no fim do livro, no glossário o que ajuda a compreender melhor a história, é uma leitura rápida e com um pouco de suspense.",
  "A história é belíssima, simples e muito tocante. Eu gosto muito desse tipo de livro, que narra o crescimento do personagem, suas descobertas e primeiras experiências. E Ondjaki fez isso com maestria, destacando na medida certo o pano de fundo histórico. Recomendo bastante!!!",
  "Uma narrativa linda e emocionante sobre a guerra de Angola sob a perspectiva de uma criança.",
];

const starCompleta = "./img/star-fill.svg";
const starMeio = "./img/star-half.svg";
const starVazio = "./img/star-1.svg";

function menuToggle() {
  document.querySelector(".menu").classList.toggle("active");
}

function comentario() {
  const id = event.target.id;

  console.log(id);

  document.querySelector("#textoComentario").innerHTML = textosComentario[id];

  if (id == 2 || id == 5) {
    document.querySelector(".imgStar").src = starCompleta;
  }
  if (id == 0) {
    document.querySelector(".imgStar").src = starVazio;
  }
  if (id == 1) {
    document.querySelector(".imgStar").src = starMeio;
  }
}
