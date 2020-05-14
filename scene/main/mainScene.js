class MainScene extends Scene {
    constructor(game) {
        super(game)
        this.init()
    }

    init() {
        this.score = 0
        this.players = []
        this.numberOfMiddleEnemies = 7
        this.numberOfSmallEnemies = 5
        this.numberOfBigEnemies = 2
        this.enemies = []
        this.backgrounds = []
        this.bullets = []
        this.bomb = []

        this.background = new GameImage(this.game, 'background3')
        log('background w, h', this.background.w, this.background.h)
        this.player = new Player(this.game)

        this.addPlayer(this.player)
        this.addBackground(this.background)
        this.addMiddleEnemies()
        this.addSmallEnemies()
        this.addBigEnemies()

        enableDebugMode(config.debugMode, this.game)
    }

    addPlayer(player) {
        // !!!!!!!
        player.scene = this
        this.players.push(player)
    }

    addEnemy(enemy) {
        // !!!!!!!
        enemy.scene = this
        this.enemies.push(enemy)
    }
    addBackground(background) {
        // !!!!!!!
        background.scene = this
        this.backgrounds.push(background)
    }
    addBullet(bullet) {
        // !!!!!!!
        bullet.scene = this
        this.bullets.push(bullet)
    }

    addBomb(bomb) {
        // !!!!!!!
        bomb.scene = this
        this.bomb.push(bomb)
    }

    addMiddleEnemies() {
        for(var i = 0; i < this.numberOfMiddleEnemies; i++) {
            var e = new MiddleEnemy(this.game)
            this.addEnemy(e)
        }
    }

    addSmallEnemies() {
        for(var i = 0; i < this.numberOfSmallEnemies; i++) {
            var e = new SmallEnemy(this.game)
            this.addEnemy(e)
        }
    }

    addBigEnemies() {
        for(var i = 0; i < this.numberOfBigEnemies; i++) {
            var e = new BigEnemy(this.game)
            this.addEnemy(e)
        }
    }

    showScore() {
        var h3 = e('.score')
        h3.innerText = 'Score: ' + this.score
    }

    update() {
        if(config.paused) {
            // log('paused', config.paused)
            return
        }
        super.update()
        for(var i = 0; i < this.players.length; i++) {
            var p = this.players[i]
            p.update()
        }
        for(var i = 0; i < this.backgrounds.length; i++) {
            var b = this.backgrounds[i]
            b.update()
        }
        for(var i = 0; i < this.enemies.length; i++) {
            var e = this.enemies[i]
            e.update()
        }
        this.clearBullets()
        // log('bullet length', this.bullets.length)
        for(var i = 0; i < this.bullets.length; i++) {
            var b = this.bullets[i]
            b.update()
        }
        for(var i = 0; i < this.bomb.length; i++) {
            var b = this.bomb[i]
            b.update()
        }
        this.showScore()
    }

    clearBullets() {
        for(var i = 0; i < this.bullets.length; i++) {
            var b = this.bullets[i]
            if(b.y > 0) {
                this.bullets.splice(0, i)
                // this.bullets = this.bullets.slice(i)
                break 
            }
        }
    }

    draw() {
        super.draw()
        for(var i = 0; i < this.backgrounds.length; i++) {
            var b = this.backgrounds[i]
            this.game.drawImage(b)
        }
        // must draw backround first, otherwise, others will be covered, such as player
        for(var i = 0; i < this.players.length; i++) {
            var p = this.players[i]
            // log('draw player', p)
            this.game.drawImage(p)
        }
        for(var i = 0; i < this.enemies.length; i++) {
            var e = this.enemies[i]
            if(e.alive) {
                this.game.drawImage(e)
            }
        }
        for(var i = 0; i < this.bullets.length; i++) {
            var b = this.bullets[i]
            this.game.drawImage(b)
        }
        for(var i = 0; i < this.bomb.length; i++) {
            var b = this.bomb[i]
            b.draw()
        }
    }
}