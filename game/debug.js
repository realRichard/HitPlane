var bindAll = function(sel, eventName, callback) {
    var all = es(sel)
    for(var i = 0; i < all.length; i++) {
        var a = all[i]
        a.addEventListener(eventName, function(event) {
            callback(event)
        })
    }
}


var enableDebugMode = function(bool, game) {
    if(!bool) {
        return 
    }
    bindAll('.auto-slide', 'input', function(event) {
        // log('event', event)
        var target = event.target
        var value = target.value
        var key = target.dataset.value
        log('key', key)
        eval(key + '=' + value)
        // spell lable, wc, should copy
        var label = target.closest('label')
        // log('lable', label)
        label.querySelector('.speed').innerHTML = value
    })
    // pause and resume the game
    window.addEventListener('keydown', function(event) {
        var k = event.key
        // log('keydown', event, typeof k, k)
        if(k == 'p') {
            config.paused = !config.paused
        }
    })
}