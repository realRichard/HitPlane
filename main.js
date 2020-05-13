const config = {
    debugMode: true,
    playerSpeed: 8,
    enemySpeed: 1,
    bulletSpeed: 4,
    coolDown: 5,
    'window.fps': 60,
    paused: false,
}


var __main = function() {
    var images = {
        bullet1:'img/bullet1.png',
        bullet2: 'img/bullet2.png',
        bullet3: 'img/bullet3.png',
        player: 'img/player2.png',
        background1: 'img/background1.png',
        background2: 'img/background2.jpg',
        background3: 'img/background3.jpg',
        cloud: 'img/cloud1.jpg',
        enemy1:'img/smallEnemy.png',
        enemy2:'img/middleEnemy.png',
        enemy3:'img/bigEnemy.png',
        enemyb2:'img/middleBeaten.png',
        enemyb3:'img/bigBeaten.png',
        blast: 'img/blast.png',
    }

    var game =  new Game(images, function(game) {
        var start = new StartScene(game)

        game.runWithScene(start)
    })
}


__main()