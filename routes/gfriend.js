const express = require('express')
const router_pqs = express.Router()

//URIS DE LAS GFRIEND

router_pqs.get('/', function funcion1_pqs(mago, room_of_mirrors) {

    room_of_mirrors.json({

        logrado: true,
        resultado: "aqui traeremos a las poderosisimas GFRIEND"

    })
    
})

router_pqs.get('/:id', function funcion1_pqs(mago, room_of_mirrors) {

    room_of_mirrors.json({

        logrado: true,
        resultado: `aqui traeremos a una de las poderosisimas GFRIEND con el id: ${mago.params.id}`

    })
    
})

router_pqs.post('/', function funcion1_pqs(mago, room_of_mirrors) {

    room_of_mirrors.json({

        logrado: true,
        resultado: `aqui insertaremo a una de las poderosisimas GFRIEND`

    })
    
})

router_pqs.put('/:id', function funcion1_pqs(mago, room_of_mirrors) {

    room_of_mirrors.json({

        logrado: true,
        resultado: `aqui editaremos a una de las poderosisimas GFRIEND con el id: ${mago.params.id}`

    })
    
})

router_pqs.delete('/:id', function funcion1_pqs(mago, room_of_mirrors) {

    room_of_mirrors.json({

        logrado: true,
        resultado: `aqui funareos a una de las poderosisimas GFRIEND con el id: ${mago.params.id}`

    })
    
})

module.exports = router_pqs