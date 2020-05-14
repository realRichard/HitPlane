class Bullet extends GameImage {
    constructor(game, name) {
        super(game, name)
    }

    hit(enemy) {
        if(this.y > enemy.y && this.y < enemy.y + enemy.h) {
            if(this.x > enemy.x && this.x < enemy.x + enemy.w) {
                return true
            }
        }
        return false
    }

    update() {
        super.update()
    }
}


class NormalAttack extends Bullet {
    constructor(game) {
        super(game, 'bullet1')
        this.init()
        // log('w, h', this.w, this.h)
    }

    init() {
        this.speed = config.bulletSpeed
        // log('bullet1 speed', this.speed)
    }

    update() {
        super.update()
        for(var i = 0; i < this.scene.enemies.length; i++) {
            var e = this.scene.enemies[i]
            if(e.alive && this.hit(e)) {
                // log('bullet1')
                this.scene.score += 1
                e.lives--
            }
        }
        this.y -= this.speed
    }
}


class BigSkill extends Bullet {
    constructor(game) {
        super(game, 'bullet3')
        this.init()
        // log('w, h', this.w, this.h)
    }

    init() {
        this.speed = 2 * config.bulletSpeed
        // log('bullet3', this.speed)
    }

    update() {
        super.update()
        for(var i = 0; i < this.scene.enemies.length; i++) {
            var e = this.scene.enemies[i]
            if(e.alive && this.hit(e)) {
                this.scene.score += 5
                e.lives = 0
            }
        }
        this.y -= this.speed
    }
}

