export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene') // Name of this scene
  }

  create() {
    // Show game title text
    this.add.text(200, 250, 'RPG Battle Game', { fontSize: '32px', fill: '#fff' })

    // Show start instructions
    this.add.text(200, 300, 'Press SPACE to Start', { fontSize: '18px', fill: '#ccc' })

    // Wait for SPACE key, then go to BattleScene
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('BattleScene')
    })
  }
}
