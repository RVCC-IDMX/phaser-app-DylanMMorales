export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleScene');
  }

  preload() {
    this.load.image('background', '/assets/images/bg.png');
    this.load.image('player', '/assets/images/player.png');
    this.load.image('enemy', '/assets/images/enemy.png');
  }

  create() {
    this.add.image(400, 300, 'background').setDisplaySize(800, 600);

    this.player = this.add.sprite(200, 300, 'player').setScale(2);
    this.enemy = this.add.sprite(600, 300, 'enemy').setScale(2);

    this.playerHP = 100;
    this.enemyHP = 100;

    this.add.text(20, 20, 'Choose Action: [A]ttack [M]agic [H]eal', {
      fontSize: '16px',
      fill: '#fff'
    });

    this.status = this.add.text(20, 60, '', {
      fontSize: '16px',
      fill: '#fff'
    });

    this.input.keyboard.on('keydown-A', () => this.attack());
    this.input.keyboard.on('keydown-M', () => this.magic());
    this.input.keyboard.on('keydown-H', () => this.heal());
  }

  attack() {
    this.enemyHP -= 20;
    this.status.setText('You attacked! Enemy HP: ' + this.enemyHP);
    this.checkEnd();
    this.enemyTurn();
  }

  magic() {
    this.enemyHP -= 30;
    this.status.setText('Magic hit! Enemy HP: ' + this.enemyHP);
    this.checkEnd();
    this.enemyTurn();
  }

  heal() {
    this.playerHP += 20;
    this.status.setText('You healed! Player HP: ' + this.playerHP);
    this.enemyTurn();
  }

  enemyTurn() {
    if (this.enemyHP <= 0) return;

    const damage = Phaser.Math.Between(10, 25);
    this.playerHP -= damage;
    this.status.setText(this.status.text + `\nEnemy attacks! Player HP: ${this.playerHP}`);
    this.checkEnd();
  }

  checkEnd() {
    if (this.enemyHP <= 0) this.scene.start('GameOverScene', { win: true });
    if (this.playerHP <= 0) this.scene.start('GameOverScene', { win: false });
  }
}
