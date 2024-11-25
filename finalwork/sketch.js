// 最終課題を制作しよう

 let enemies = [];
 let score = 0;
 
 function setup() {
     createCanvas(windowWidth, windowHeight);
     for (let i = 0; i < 10; i++) {
         enemies.push(new Enemy(random(width), random(height))); //敵をランダムな位置に配置する
     }
 }
 
 function draw() {
     background(160, 192, 255);
     for (let enemy of enemies) {
         enemy.move();
         enemy.display();
     }　//各キャラクターを移動させ、表示させる
     displayScore();
 }
 
 function mousePressed() {
     for (let i = enemies.length - 1; i >= 0; i--) {
         if (enemies[i].isHit(mouseX, mouseY)) {
             enemies.splice(i, 1);
             score++;
         }
     }
 }
 
 function displayScore() {
     textSize(32);
     fill(0);
     textAlign(CENTER, TOP);
     text(`Score: ${score}`, width / 2, 10);
 }
 let x,y
 class Enemy {
     constructor(x, y) {
         this.x = x;
         this.y = y;
         this.size = 50;
         this.speed = 5;
     }　//初期位置、サイズ、速度を設定する
 
     move() {
       let vx,vy;
       if(this.vx === undefined) {this.vx = 5}
       if(this.vy === undefined) {this.vy = 5}
       // 速度は「位置の変化量」
       this.x += this.vx;
       this.y += this.vy;

       // 跳ね返りは「速度 × -1」
       if(this.x < 0 || this.x > width){ this.vx = -1 * this.vx; }
       if(this.y < 0 || this.y > height){ this.vy = -1 * this.vy; }

       // x座標, y座標を画面内に戻しておく
       this.x = constrain(this.x, 0, width);
       this.y = constrain(this.y, 0, height);
     }
 
     display() {
         fill(255);
         ellipse(this.x, this.y, this.size);　//敵キャラクターを描画する
     }
 
     isHit(px, py) {
         let d = dist(px, py, this.x, this.y);
         return d < this.size / 2;
     }　//クリック位置が敵の位置に当たっているかを判定する
 }


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
