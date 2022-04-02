


class Piece {
    constructor(img, startLoc) {
    this.loc = document.getElementById("board").rows[startLoc[0]].cells[startLoc[1]];
    this.loc.innerHTML = "<img src = pics/" + img + ">";
    this.role = img.slice(1,2);
    this.loc.addEventListener("click", function(){

        alert("you clicked on " + this.id + "!");
        alert(this.parentNode)
        // switch(this.parentNode.role){
        //     case "r":
        //         document.write("you clicked a rook");
        // }

    });
    }
}





let br1 = new Piece("br.png", [0,0]);
let bn1 = new Piece("bn.png", [0,1]);
let bb1 = new Piece("bb.png", [0,2]);
let bq = new Piece("bq.png", [0,3]);
let bk = new Piece("bk.png", [0,4]);
let bb2 = new Piece("bb.png", [0,5]);
let bn2 = new Piece("bn.png", [0,6]);
let br2 = new Piece("br.png", [0,7]);

let bp1 = new Piece("bp.png", [1,0]);
let bp2 = new Piece("bp.png",[1,1]);
let bp3 = new Piece("bp.png",[1,2]);
let bp4 = new Piece("bp.png",[1,3]);
let bp5 = new Piece("bp.png",[1,4]);
let bp6 = new Piece("bp.png",[1,5]);
let bp7 = new Piece("bp.png",[1,6]);
let bp8 = new Piece("bp.png",[1,7]);

let wp1 = new Piece("wp.png",[6,0]);
let wp2 = new Piece("wp.png",[6,1]);
let wp3 = new Piece("wp.png",[6,2]);
let wp4 = new Piece("wp.png",[6,3]);
let wp5 = new Piece("wp.png",[6,4]);
let wp6 = new Piece("wp.png",[6,5]);
let wp7 = new Piece("wp.png",[6,6]);
let wp8 = new Piece("wp.png",[6,7]);

let wr1 = new Piece("wr.png", [7,0]);
let wn1 = new Piece("wn.png", [7,1]);
let wb1 = new Piece("wb.png", [7,2]);
let wq = new Piece("wq.png", [7,3]);
let wk = new Piece("wk.png", [7,4]);
let wb2 = new Piece("wb.png", [7,5]);
let wn2 = new Piece("wn.png", [7,6]);
let wr2 = new Piece("wr.png", [7,7]);

document.write("<br><br>help");