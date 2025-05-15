export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene') // Name of this scene
  }

  init(data) {
    this.win = data.win // Check if player won or lost
  }

  create() {
    // Show message based on win/loss
    const msg = this.win ? 'You Win!' : 'You Lose'
    this.add.text(300, 250, msg, { fontSize: '32px', fill: '#fff' })

    // Instruction to restart the game
    this.add.text(230, 320, 'Press SPACE to Restart', { fontSize: '18px', fill: '#ccc' })

    // Wait for SPACE key to go back to Title screen
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('TitleScene')
    })
  }
}

  