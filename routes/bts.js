const express = require('express')
const router_pqs = express.Router()

// URIS DE LOS BITIES

router_pqs.get('/', function funcion1_pqs(jin, namjoon) {

    namjoon.json({

        logrado: true,
        resultado: "aqui traeremos a los poderosisimos BTS"

    })
    
})

router_pqs.get('/:id', function funcion1_pqs(jin, namjoon) {

    namjoon.json({

        logrado: true,
        resultado: `aqui traeremos a uno de los poderosisimos BTS con el id: ${jin.params.id}`

    })
    
})

router_pqs.post('/', function funcion1_pqs(jin, namjoon) {

    namjoon.json({

        logrado: true,
        resultado: `aqui insertaremo a uno de los poderosisimos BTS`

    })
    
})

router_pqs.put('/:id', function funcion1_pqs(jin, namjoon) {

    namjoon.json({

        logrado: true,
        resultado: `aqui editaremos a uno de los poderosisimos BTS con el id: ${jin.params.id}`

    })
    
})

router_pqs.delete('/:id', function funcion1_pqs(jin, namjoon) {

    namjoon.json({

        logrado: true,
        resultado: `aqui funareos a uno de los poderosisimos BTS con el id: ${jin.params.id}`

    })
    
})

module.exports = router_pqs