//functions
import { changeAct1Status } from "../../screens/ACT/Act1/functions/MakeAct1Done"
import { changeAct2Status } from "../../screens/ACT/Act2/functions/MakeAct2Done"
import { changeAct3Status } from "../../screens/ACT/Act3/functions/MakeAct3Done"
import { makeAct1NotDone, readAct1Done, makeAct2NotDone, readAct2Done, makeAct3NotDone, readAct3Done } from "./navigationScreenData"

export const makeAllActTrue = (setAct1Status, setAct2Status, setAct3Status) => {
    changeAct1Status(setAct1Status)
    changeAct2Status(setAct2Status)
    changeAct3Status(setAct3Status)
    
}

export const MakeAllActNotDone = (setAct1Status, setAct2Status, setAct3Status) => {
    makeAct1NotDone().then(
        readAct1Done()
        .then(function(res) { setAct1Status(res.act1Done); }))

    makeAct2NotDone().then(
        readAct2Done()
        .then(function(res) { setAct2Status(res.act2Done); }))

    makeAct3NotDone().then(
        readAct3Done()
        .then(function(res) { setAct3Status(res.act3Done); }))
}