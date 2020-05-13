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
    }

    update() {
        super.update()
        // this.speed = config.enemySpeed
        if(this.lives == 0) {
            this.alive = false
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
            this.alive = false
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
            this.alive = false
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