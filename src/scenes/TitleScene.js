export default class TitleScene extends Phaser.Scene {
    constructor() {
      super('TitleScene')
    }
  
    create() {
      this.add.text(200, 250, 'RPG Battle Game', { fontSize: '32px', fill: '#fff' })
      this.add.text(200, 300, 'Press SPACE to Start', { fontSize: '18px', fill: '#ccc' })
  
      this.input.keyboard.once('keydown-SPACE', () => {
        this.scene.start('BattleScene')
      })
    }
  }
  