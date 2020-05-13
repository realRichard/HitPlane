class Player extends GameImage {
    constructor(game) {
        super(game, 'player')
        this.init()
    }

    init() {
        this.x = 180
        this.y = 520
        this.speed = config.playerSpeed
        // bullet coolDown
        this.coolDown = config.coolDown
        // big skill coolDown
        this.bigSkillCoolDown = 10 * this.coolDown
        // now this is binded to other object
        var g = this.game
        // var self = this
        // g.registerAction('a', function() {
        //     // log('this', typeof this, this)
        //     self.moveLeft()
        // })

        // g.registerAction('d', function() {
        //     self.moveRight()
        // })

        // g.registerAction('w', function() {
        //     self.moveUp()
        // })

        // g.registerAction('s', function() {
        //     self.moveDown()
        // })

        // g.registerAction(' ', function() {
        //     self.fire()
        // })

        // fire
        g.registerAction(' ', () => {
            this.fire()
        })

        // big skill
        g.registerAction('k', () => {
            // log('kkk')
            this.kill()
        })

        g.registerAction('a', () => {
            this.moveLeft()
        })

        g.registerAction('d', () => {
            this.moveRight()
        })

        g.registerAction('w', () => {
            this.moveUp()
        })

        g.registerAction('s', () => {
            this.moveDown()
        })
    }

    collide(enemy) {
        if(enemy.alive) {
            if(this.y < enemy.y + enemy.h) {
                if(this.x > enemy.x && this.x < enemy.x + enemy.w) {
                    return true
                }
            }
        }
        return false
    }

    update() {
        super.update()
        this.speed = config.playerSpeed
        for(var i = 0; i < this.scene.enemies.length; i++) {
            var e = this.scene.enemies[i]
            if(this.collide(e)) {
                var end = new EndScene(this.game)
                this.game.replaceScene(end)
            }
        }
        if(this.x < -this.w / 2) {
            this.x = -this.w / 2
        }
        if(this.x + (this.w / 2) > 512) {
            this.x = 512 - (this.w / 2)
        }
        if(this.y + this.h > 768) {
            this.y = 768 - this.h
        }
        if(this.y < 0) {
            this.y = 0
        }
        if(this.coolDown > 0) {
            this.coolDown--
        }
        if(this.bigSkillCoolDown > 0) {
            this.bigSkillCoolDown--
        }
    }

    fire() {
        if(this.coolDown == 0) {
            this.coolDown = config.coolDown
            var x = this.x + this.w / 2
            var y = this.y
            var bullet = new NormalAttack(this.game)
            bullet.x = x
            bullet.y = y
            this.scene.addBullet(bullet)
        }
    }

    kill() {
        if(this.bigSkillCoolDown == 0) {
            this.bigSkillCoolDown = 10 * config.coolDown
            var x = this.x + this.w / 2
            var y = this.y
            var bullet = new BigSkill(this.game)
            bullet.x = x - (bullet.w / 2)
            bullet.y = y
            this.scene.addBullet(bullet)
        }
    }

    moveRight() {
        this.x += this.speed
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }
}
