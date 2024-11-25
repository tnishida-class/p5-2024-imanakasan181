// チェッカー
function setup() {
  let s = 50; //人マスのサイズ
  let d = 40;//中の円の直径
  createCanvas(400, 400);
  background(255);
  noStroke();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let x = i * s;
      let y = j * s;
      if ((i + j) % 2 === 1) {
        fill(122);
        rect(x, y, s, s);
      }
      if (((i + j) % 2 === 1) && (j < 3)) {　//&&かつ
        fill(255, 0, 0); //red
        ellipse(x + s / 2, y + s / 2, d);//(中心のｘ座標、中心のｙ座標、ｘ方向の半径、ｙ方向の半径)
      }
      if (((i + j) % 2 === 1) && (4 < j)) {
        fill(0); //black
        ellipse(x + s / 2, y + s / 2, d, d);
      }
    }
  }
}
    

