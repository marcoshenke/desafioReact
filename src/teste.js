const cartas = [
  { valor: 7, naipe: "espadas" },
  { valor: 10, naipe: "copas" },
  { valor: 4, naipe: "ouros" },
  { valor: 2, naipe: "paus" },
  { valor: 5, naipe: "copas" },
  { valor: 1, naipe: "ouros" },
  { valor: 13, naipe: "paus" },
  { valor: 8, naipe: "espadas" },
  { valor: 6, naipe: "copas" },
  { valor: 11, naipe: "espadas" },
  { valor: 12, naipe: "ouros" },
  { valor: 9, naipe: "paus" },
  { valor: 3, naipe: "copas" },
];
cartas.sort((a, b) => b.naipe - a.naipe), console.log(cartas);
