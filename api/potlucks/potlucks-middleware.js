function validEventID(req, res, next) {
    Events.getByID(req.params.id)
    .then(event => {
        if(event){
            req.event = event
            next()
        }else {
            res.status(400).json({
                message: "INVALID"
            })
        }
    })
    .catch(next)
}

function validNewEvent(req, res, next) {
    const event = req.body
    if(!event){
        res.status(400).json({
            message: "Data Missing"
        })
    
    }else if(!event.title){
        res.status(400).json({
            message: "Title missing"
        })
    }else if(!event.month){
        res.status(400).json({
            message: "Month missing"
        })
    }else if(!event.day){
        res.status(400).json({
            message: "Day missing"
        })
    }else if(!event.year){
        res.status(400).json({
            message: "Year missing"
        })
    }else if(!event.time_From){
        res.status(400).json({
            message: "Time missing FROM"
        })
    }else if(!event.time_To){
        res.status(400).json({
            message: "Time missing TO"
        })
    }else if(!event.location){
        res.status(400).json({
            message: "Location Missing"
        })
    }else{
        next()
    }
}
