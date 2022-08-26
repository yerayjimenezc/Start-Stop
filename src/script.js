
class Box {
    constructor(box) {
      this.html = document.getElementById(box)
      this.posY = 60
      this.timer = null
      this.direction = 1
      this.velocity = 200
    }
    
    move(seconds, topY, intervalStop) {
    this.velocity = this.velocity 
    this.seconds = seconds
    this.topY = topY
    this.intervalStop = intervalStop

      this.timer = setInterval(() => {
        if (this.posY === this.topY || this.posY % this.intervalStop === 0){
            this.stop()
            setTimeout(() => {
                if (moving){
                    this.move(this.seconds, this.topY, this.intervalStop)
                }
            }, seconds)
        }
        this.posY += this.direction * 20
        this.html.style.top = `${this.posY}px`
        if (this.posY + 200 >= 800 || this.posY <= 60) this.direction *= -1
      }, this.velocity)
    }
    
    stop() {
      clearInterval(this.timer)
    }
  }
  
  
  let btn = document.getElementById('start-stop')
  let box = new Box('box')
  let box2 = new Box('box2')
  let moving = false
  
  btn.addEventListener('click', () => {
    if (!moving) {
        btn.setAttribute('class', 'red')
        btn.innerText = 'STOP'
    
        box.move(3000, 600)
        box2.move(1000, 100, 100)
        moving = true
    } else {
        btn.setAttribute('class', 'green')
        btn.innerText = 'START'
            
        box.stop()
        box2.stop()
        moving = false
    }
    
  })

// let btn = document.getElementById('start-stop')
// let box = document.getElementById('box')

// let statusBtn = false
// let posY = 60
// let direction = 1

// btn.onclick = () => {
//     if (!statusBtn){
//         btn.setAttribute('class', 'red')
//         btn.innerText = 'STOP'
//         statusBtn = !statusBtn
//         idInterval = setInterval(() => {
//             if(posY < 60 || posY >= 800 - 200) {
//                 direction *= -1
//             }
//             posY += 10 * direction 
//             box.style.top = `${posY}px`
//         }, 10) 
//     } else { 
//         btn.setAttribute('class', 'green')
//         btn.innerText = 'START'
//         statusBtn = !statusBtn
//         clearInterval(idInterval)
//     }
// } 
