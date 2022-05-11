//storage API
import { readAct1Done, makeAct1Done } from '../../../../functions/storage/navigationScreenData';

export const changeAct1Status = (setAct1Status) => {
    makeAct1Done()
    .then(
      readAct1Done()
      .then(function(res) {
        setAct1Status(res.act1Done)
      })
      )
}