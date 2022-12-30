function Commonの確認() {
  console.log(new Common_Date('2022-11-14').getLastDate())
}


function Commonの確認でnullのときは現在の付きを取得するかどうか() {
  console.log(new Common_Date().getLastDate())
}


function testGetLastEvent() {
  const set = new setCalender('2022/12/29 22:00:00', '2022/12/29 23:00:00', '遊ぶよ')

  //set.main()
  text = '遊ぶ'
  startDate = '2022/11/01';
  endDate = '2022/11/31';
  getLastEvent(text);
}

function static() {
  console.log(Common_Date.calcHourDate('2022-11-01', 1))
  console.log(Common_Date.checkTime('2022-11-01', '2021-11-01'))
  console.log(Common_Date.getStr(new Date('2022-12-11')));
}