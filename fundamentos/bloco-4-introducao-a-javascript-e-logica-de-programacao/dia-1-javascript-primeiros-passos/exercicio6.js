let peca = "Queen";

peca = peca.toLowerCase();

switch (peca) {
    case "pawn":
        console.log(peca, "-> forward, 1 square");
        break;
    case "rook":
        console.log(peca, "-> straight lines");
        break;
    case "knight":
        console.log(peca, "-> shape of an L");
        break;
    case "bishop":
        console.log(peca, "-> diagonals");
        break;
    case "queen":
        console.log(peca, "-> any direction");
        break;
    case "king":
        console.log(peca, "-> any direction, 1 square");
        break;
    default:
        console.log("Error: invalid chess piece");
};