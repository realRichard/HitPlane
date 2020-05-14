class Particle extends GameImage {
    constructor(game, name, time, x, y, w, h, speed) {
        super(game, name)
        this.init(time, x, y, w, h, speed)
    }

    init(time, x, y, w, h, speed) {
        this.x = randomBewteen(x, x + w)
        this.y = randomBewteen(y, y + h)
        this.vx = randomBewteen(-speed, speed) 
        this.vy = randomBewteen(-speed, speed) 
        this.time = time
    }

    draw() {
        super.draw()
        if(this.time > 0) {
            this.game.drawImage(this, this.x, this.y)
        }
    }

    update() {
        super.update()
        if(this.time > 0) {
            this.time--
        }
        this.x += this.vx
        this.y += this.vy
    }
}


class ParticleSystem {
    constructor(game, name, number, time, x, y, w, h, speed) {
        this.init(game, name, number, time, x, y, w, h, speed)
    }

    init(game, name, number, time, x, y, w, h, speed) {
        this.game = game
        this.name = name
        this.numberOfParticle = number
        this.time = time
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed =speed
        this.particles = []
    }

    draw() {
        for(var p of this.particles) {
            p.draw()
        }
    }

    update() {
        if(this.particles.length < this.numberOfParticle) {
            var p = new Particle(this.game, this.name, this.time, this.x, this.y, this.w, this.h, this.speed)
            this.particles.push(p)
        }
        for(var p of this.particles) {
            p.update()
        }
    }
}


