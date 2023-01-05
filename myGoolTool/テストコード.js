function testSheet() {
  const sheet = new SpreadSheet('設定')
  const row = sheet.getLastRow();
  const ID = sheet.getValues('A2', 'A' + row);
  const NAME = sheet.getValues('B2', 'B' + row);
  const Caution = sheet.getValues('C2', 'C' + row);
  const isGraph = sheet.getValues('D2', 'D' + row);
  const Type = sheet.getValues('E2', 'E' + row);
  const Value = sheet.getValues('F2', 'F' + row);

  let id;
  let name;
  let type;
  let nowID
  let caution

  let textArr = [];

  let ret = [];
  let res = {};
  // 2から始まるので回転数を１減らす
  for (let i = 0; i < row - 1; i++) {
    // 名前
    id = ID[i][0]
    if (id != '') {

      nowID = id
      res.id = id
      res.name = NAME[i][0]
      res.caution = Caution[i][0]
    }
    type = Type[i][0]
    if (type == 'テキスト') {
      res.text = textArr.push(Value[i][0])
    }
    console.log(type)
    // 次が定義されていない　または、　次の値が空でなく、現在の値と違う場合
    if (ID[i + 1] == undefined || (ID[i + 1][0] != '' && ID[i + 1][0] != nowID)) {
      //最後のデータがPUSHされない
      if (type = 'テキスト') {
        res.text = textArr
      }
      ret.push(res);
      textArr = []
      res = {};
    }

  }
  console.log(ret);

  const ret2 = [
    {
      name: '散髪',
      cautionDay: 60,
      id: 'haircut',
      selectbox: [['りんご', 'みかん']],
      text: ['読んだ本']
    },
  ]
}

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