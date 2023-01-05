// const CALENDER_ID = 'XXXXXXXXX';

// // 項目を追加したらここに記載する
// const NAME_RELATION = {
//   '散髪': {
//     'cautionDay': '30',
//   },
//   '遊ぶ': {
//     'cautionDay': '5',
//   },
//   '買い物': {
//     'cautionDay': '99',
//   },
//   'サウナ': {
//     'cautionDay': '10',
//   },
//   '読書': {
//     'cautionDay': '10',
//   }
// };

function getCategory() {
  const sheet = new SpreadSheet('設定')
  const row = sheet.getLastRow();
  const ID = sheet.getValues('A2', 'A' + row);
  const NAME = sheet.getValues('B2', 'B' + row);
  const Caution = sheet.getValues('C2', 'C' + row);
  const isGraph = sheet.getValues('D2', 'D' + row);
  const Type = sheet.getValues('E2', 'E' + row);
  const Value = sheet.getValues('F2', 'F' + row);

  let id;
  let type;
  let nowID

  let textArr = [];
  let selectArr = [];

  let ret = [];
  let res = {};
  // 2から始まるので回転数を１減らす
  for (let i = 0; i < row - 1; i++) {
    // 名前
    id = ID[i][0]
    if (id != '') {

      nowID = id
      // ===========================
      // 値設定有無
      // ===========================
      res.id = id
      res.name = NAME[i][0]
      res.cautionDay = Caution[i][0]
    }
    // ===========================
    // グラフ設定有無
    // ===========================
    if (isGraph[i][0]) {
      res.graph = true;
    }
    // ===========================
    // Adminに設定する値を記録する
    // ===========================
    type = Type[i][0]
    switch (type) {
      case 'テキスト':
        textArr.push(Value[i][0])
        break;
      case 'セレクト':
        // ,で分割して配列化してPUSHする
        selectArr.push(Value[i][0].split(','))
        break;
      default:
    }
    // ===========================
    // データの登録
    // ===========================
    // 次が定義されていない　または、　次の値が空でなく、現在の値と違う場合にPUSHする。つまり終了処理
    if (ID[i + 1] == undefined || (ID[i + 1][0] != '' && ID[i + 1][0] != nowID)) {
      if (textArr.length > 0) {
        res.text = textArr
      }
      if (selectArr.length > 0) {
        res.select = selectArr
      }

      ret.push(res);
      textArr = []
      selectArr = []
      res = {};
    }

  }
  console.log(ret);
  return JSON.stringify(ret)

}

function EXPECTED_GtCategory() {
  let res = [
    {
      id: 'haircut',
      name: '散髪',
      cautionDay: 30,
    },
    {
      id: 'sauna',
      name: 'サウナ',
      cautionDay: 10,
    },
    {
      id: 'enjoy',
      name: '遊ぶ',
      cautionDay: 10,
      graph: true,
      select: [['エンターテイメント', '食事', '飲み会']]
    },
    {
      id: 'reading',
      name: '読書',
      cautionDay: 60,
      text: ['本のタイトル', '感想'],
      select: [['プログラミング', '趣味']]
    },
    {
      id: 'buy',
      name: '買い物',
      cautionDay: 60,
      select: [['１万円以上の個人用', '贈答用']],
    },
    {
      id: 'activity',
      name: '運動',
      cautionDay: 3,
      graph: true,
    },
    // {
    //   id: 'buy',
    //   name: '買い物',
    //   cautionDay: 60,
    //   sheetName: '100リスト',
    // },
  ]
  return JSON.stringify(res);
}


/**
 * textのタイトルを持つカレンダーのデータを取得するよ
 * 
 * @param string $text カレンダー検索対象の文字
 * 
 */
function getLastEvent(id, text, cautionDay, startDate, endDate) {
  // const now = new Date()
  // const startDate = Common_Date.getFirstDate(now);
  // const endDate = Common_Date.getLastDate(now);


  const calender = new Calender(text, startDate, endDate);

  let isCaution = true
  let passedDay = 9999;
  let lastDate = false
  if (calender.count()) {
    lastDate = calender.lastDate()
    isCaution = Common_Date.checkOverFromNow(lastDate, cautionDay)
    passedDay = Common_Date.passedDay(lastDate);
  }
  const res = {
    name: text,
    lastDate: lastDate,
    count: calender.count(),
    startDate: startDate,
    endDate: endDate,
    isCaution: isCaution,
    passedDay: passedDay,
    graph: { grapLabel: [1, 2, 3, 4], graphData: [3, 4, 5, 6] }
  }
  console.log(res);

  return JSON.stringify(res)
}

function setCalenderData(text, startDate, endDate) {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  if (!Common_Date.checkTime(startDate, endDate)) {
    throw new EvalError('No start and end')
  }
  const SaveCal = new Calender(text)
  SaveCal.save(startDate, endDate)
}


function getRandomList100() {
  const List100 = new List100Sheet();
  const min = 2;
  const max = List100.getLastRow();
  const num = Math.floor(Math.random() * (max + 1 - min)) + min;
  const res = {
    id: num,
    msg: List100.getTitle(num),
    checked: List100.isChecked(num)
  }
  return JSON.stringify(res);
}


function getRandomGoal() {
  const Goal = new GoalSheet();
  const min = 2;
  const max = Goal.getLastRow();
  const num = Math.floor(Math.random() * (max + 1 - min)) + min;
  const res = {
    id: num,
    msg: Goal.getTitle(num),
    checked: Goal.isChecked(num)
  }
  return JSON.stringify(res);
}

function getAll100List() {
  const List100 = new List100Sheet();
  return JSON.stringify(List100.getAllTitleArr())
}

/**
 * 指定期間の数をグラフ化して返却する
 * @returns Json
 */
function getListForGraph(text, term = 'week') {
  let label = [];
  let data = [];
  const now = new Date()

  let monday;
  let sunday;
  let count;
  let calender
  let countAll = 0;
  let targetDate = now;
  for (let i = 0; i < 6; i++) {
    console.log(targetDate);
    // 今月
    monday = Common_Date.getMondayYmd(targetDate)
    sunday = Common_Date.calcDay(monday, 6)
    calender = new Calender(text, monday, sunday)
    count = calender.count()

    label.push(monday);
    data.push(count);
    // 先週に移動する. マイナス１で引くと、月替りでバグる。
    targetDate = Common_Date.calcDay(monday, -3);
    countAll += count;

  }
  label = label.reverse()
  data = data.reverse()


  const res = {
    text: text,
    count: countAll,
    label: label,
    data: data,
    // label: ['2022/09', '2022/10', '2022/11', '2022/12', '2023/01', '2023/02', '2023/03'],
    // data: [2, 10, 4, 0, 11, 5, 0]
  }
  return JSON.stringify(res);
}








