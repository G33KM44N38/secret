//storage API
import { makeAct2Done, readAct2Done } from '../../../../functions/storage/navigationScreenData';

export const changeAct2Status = (setAct2Status) => {
    makeAct2Done()
    .then(
      readAct2Done()
      .then(function(res) {
        setAct2Status(res.act2Done)
      })
      )
}