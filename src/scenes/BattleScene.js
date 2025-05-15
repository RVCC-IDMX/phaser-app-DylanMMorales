export default class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleScene'); // Name of the scene
  }

  preload() {
    // Load images before the game starts
    this.load.image('background', '/assets/images/bg.png');
    this.load.image('player', '/assets/images/player.png');
    this.load.image('enemy', '/assets/images/enemy.png');
  }

  create() {
    // Add background image to the screen
    this.add.image(400, 300, 'background').setDisplaySize(800, 600);

    // Add player and enemy sprites to the screen
    this.player = this.add.sprite(200, 300, 'player').setScale(2);
    this.enemy = this.add.sprite(600, 300, 'enemy').setScale(2);

    // Set starting health
    this.playerHP = 100;
    this.enemyHP = 100;

    // Show action options on screen
    this.add.text(20, 20, 'Choose Action: [A]ttack [M]agic [H]eal', {
      fontSize: '16px',
      fill: '#fff'
    });

    // Empty text field to show battle messages
    this.status = this.add.text(20, 60, '', {
      fontSize: '16px',
      fill: '#fff'
    });

    // Set up keyboard controls
    this.input.keyboard.on('keydown-A', () => this.attack());
    this.input.keyboard.on('keydown-M', () => this.magic());
    this.input.keyboard.on('keydown-H', () => this.heal());
  }

  attack() {
    // Reduce enemy health and update message
    this.enemyHP -= 20;
    this.status.setText('You attacked! Enemy HP: ' + this.enemyHP);
    this.checkEnd(); // Check if enemy is defeated
    this.enemyTurn(); // Enemy responds
  }

  magic() {
    // Stronger attack than regular
    this.enemyHP -= 30;
    this.status.setText('Magic hit! Enemy HP: ' + this.enemyHP);
    this.checkEnd();
    this.enemyTurn();
  }

  heal() {
    // Add health to player
    this.playerHP += 20;
    this.status.setText('You healed! Player HP: ' + this.playerHP);
    this.enemyTurn();
  }

  enemyTurn() {
    if (this.enemyHP <= 0) return; // Don’t attack if enemy is already dead

    // Enemy randomly attacks player
    const damage = Phaser.Math.Between(10, 25);
    this.playerHP -= damage;
    this.status.setText(this.status.text + `\nEnemy attacks! Player HP: ${this.playerHP}`);
    this.checkEnd(); // Check if player is defeated
  }

  checkEnd() {
    // If someone’s HP hits 0, move to Game Over screen
    if (this.enemyHP <= 0) this.scene.start('GameOverScene', { win: true });
    if (this.playerHP <= 0) this.scene.start('GameOverScene', { win: false });
  }
}
