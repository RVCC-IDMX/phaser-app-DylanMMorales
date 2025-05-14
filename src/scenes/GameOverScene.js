export default class GameOverScene extends Phaser.Scene {
    constructor() {
      super('GameOverScene')
    }
  
    init(data) {
      this.win = data.win
    }
  
    create() {
      const msg = this.win ? 'You Win!' : 'You Lose'
      this.add.text(300, 250, msg, { fontSize: '32px', fill: '#fff' })
      this.add.text(230, 320, 'Press SPACE to Restart', { fontSize: '18px', fill: '#ccc' })
  
      this.input.keyboard.once('keydown-SPACE', () => {
        this.scene.start('TitleScene')
      })
    }
  }
  