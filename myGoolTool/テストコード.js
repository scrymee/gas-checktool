function test_getListForGraph() {
  getListForGraph('遊ぶ')
}



function リスト100を取得する() {
  console.log(getAll100List())
}


function set2() {
  text = '遊ぶ'
  startDate = Common_Date.convertFromLocalTime('2022/12/31T12:00');
  endDate = Common_Date.convertFromLocalTime('2022/12/31T13:00');
  console.log(startDate)
  const a = new Calender(text)
  a.save(startDate, endDate)
}
function test() {
  console.log(new GoalSheet().getTitle('2'))
  console.log(new GoalSheet().check('2', '2022-12-31'))
}


function testGetLastEvent() {
  // const set = new Calender('2022/12/29 22:00:00', '2022/12/29 23:00:00', '遊ぶよ')

  //set.main()
  text = '遊ぶ'
  startDate = '2022/11/01';
  endDate = '2022/11/31';
  getLastEvent(text, startDate, endDate);
}

function set() {
  text = '遊ぶ'
  startDate = new Date('2022/12/31T12:00');
  endDate = new Date('2022/12/31T12:30');
  console.log(startDate)
  const a = new Calender()
  a.save(text, startDate, endDate)
}
function Commonの確認() {
  console.log(new Common_Date('2022-11-14').getLastDate())
}


function Commonの確認でnullのときは現在の付きを取得するかどうか() {
  console.log(new Common_Date().getLastDate())
}


function static() {
  console.log(Common_Date.calcHourDate('2022-11-01', 1))
  console.log(Common_Date.checkTime('2022-11-01', '2021-11-01'))
  console.log(Common_Date.getStr(new Date('2022-12-11')));
}