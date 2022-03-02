import axios from 'axios'


(async () =>  axios.get("https://api.wynncraft.com/v2/player/SleepingXor/stats").then(res =>  // (love you sleepin)
  {
    const arr = res.data.data[0].classes.sort(clazz => clazz.quests.completed)
    const clazz = arr[arr.length - 1]
    const {quests} = clazz
    let list = quests.list
    let copy = [...list]

    list = list.map(item => item.toUpperCase()
      .replaceAll("MINI-QUEST - ", "MINIQUEST_")
      .replaceAll(" ", "_")
      .replaceAll("-", "")
      .replaceAll("\'", "")) // make them into an enumerable form (java friendly) .

    list = (list.map(
      (item, index) => `${item}("${copy[index]}"),`
    )).join("\n")
    console.log(list)
    
    
}))();