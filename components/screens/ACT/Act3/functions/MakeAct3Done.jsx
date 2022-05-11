//storage API
import { makeAct3Done, readAct3Done } from '../../../../functions/storage/navigationScreenData';

export const changeAct3Status = (setAct3Status) => {
    makeAct3Done()
    .then(
      readAct3Done()
      .then(function(res) {
        setAct3Status(res.act3Done)
      })
      )
}