import Phaser from 'phaser'
import TitleScene from './scenes/TitleScene.js'
import BattleScene from './scenes/BattleScene.js'
import GameOverScene from './scenes/GameOverScene.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [TitleScene, BattleScene, GameOverScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
}

new Phaser.Game(config)
