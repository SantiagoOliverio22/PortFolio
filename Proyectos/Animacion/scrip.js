const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight


let bolas = []


for(let i = 0; i < 50; i++){
    bolas.push(new Bula(canvas.width/2, canvas.height/2))
}

function animar(){

    ctx.clearRect(0,0, canvas.width, canvas.height)

    bolas.forEach(bola => {


        bolas.forEach(bola2 => {

            let dx = bola2.x - bola.x
            let dy = bola2.y - bola.y
            let dist = Math.sqrt(dx ** 2 + dy ** 2)
            
            if(dist < 150){
            

                ctx.beginPath()
                ctx.moveTo(bola.x,bola.y)
                ctx.lineTo(bola2.x, bola2.y)
                ctx.stroke()
                ctx.closePath()

            }

        })


        bola.dibujar()
        bola.mover()
    })

    requestAnimationFrame(animar)
}

animar()