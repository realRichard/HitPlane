class SmallEnemy extends GameImage {
    constructor(game) {
        super(game, 'enemy1')
        this.init()
    }

    init() {
        this.x = randomBewteen(0, 512 - this.w)
        this.y = randomBewteen(0 - this.h, 0)
        this.speed = randomBewteen(1, 3)
        this.alive = true
        this.lives = 1
        this.bomb = false
    }

    update() {
        super.update()
        // this.speed = config.enemySpeed
        if(this.lives == 0) {
            this.bomb = true
            this.lives--
            this.alive = false
        }
        if(this.bomb) {
            var b = new ParticleSystem(this.game, 'blast1', 5, 20, this.x, this.y, this.w, this.h, 1)
            this.scene.addBomb(b)
            this.bomb = false
        }
        this.y += this.speed
        if(this.y > 768) {
            this.init()
        }
    }
}


class MiddleEnemy extends GameImage {
    constructor(game) {
        super(game, 'enemy2')
        this.init()
    }

    init() {
        this.x = randomBewteen(0, 512 - this.w)
        this.y = randomBewteen(0 - this.h, 0)
        this.speed = randomBewteen(1, 2)
        this.alive = true
        this.lives = 30
        this.bomb = false
        this.beaten = this.game.textureByName('enemyb2')
    }

    update() {
        super.update()
        // this.speed = config.enemySpeed
        // log('alive lives', this.alive, this.lives)
        if(this.lives < 20) {
            this.texture = this.beaten
        }
        if(this.lives == 0) {
            this.bomb = true
            this.lives--
            this.alive = false
        }
        if(this.bomb) {
            var b = new ParticleSystem(this.game, 'blast2', 10, 30, this.x, this.y, this.w, this.h, 2)
            this.scene.addBomb(b)
            this.bomb = false
        }
        this.y += this.speed
        if(this.y > 768) {
            this.texture = this.game.textureByName('enemy2')
            this.init()
        }
    }
}


class BigEnemy extends GameImage {
    constructor(game) {
        super(game, 'enemy3')
        this.init()
    }

    init() {
        this.x = randomBewteen(0, 512 - this.w)
        this.y = randomBewteen(0 - this.h, 0)
        // this.speed = randomBewteen(1, 2)
        this.speed = 1
        this.alive = true
        this.lives = 200
        this.bomb = false
        this.beaten = this.game.textureByName('enemyb3')
    }

    update() {
        super.update()
        // this.speed = config.enemySpeed
        // log('alive lives', this.alive, this.lives)
        if(this.lives < 100) {
            this.texture = this.beaten
        }
        if(this.lives == 0) {
            // log('big.enemy.lives', this.lives)
            this.bomb = true
            this.lives--
            this.alive = false
        }
        if(this.bomb) {
            var b = new ParticleSystem(this.game, 'blast3', 20, 60, this.x, this.y, this.w, this.h, 3)
            this.scene.addBomb(b)
            this.bomb = false
        }
        this.y += this.speed
        if(this.y > 768) {
            this.texture = this.game.textureByName('enemy3')
            this.init()
        }
    }
}


class Cloud extends GameImage {
    constructor(game) {
        super(game, 'cloud')
        this.init()
    }

    init() {
        this.x = randomBewteen(0, 450)
        this.y = randomBewteen(-200, 0)
        this.speed = 1
    }

    update() {
        super.update()
        this.y += this.speed
        if(this.y > 650) {
            this.init()
        }
    }
}