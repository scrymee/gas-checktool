// const CALENDER_ID = 'XXXXXXXXX';

const NAME_RELATION = {
  '散髪': {
    'id': 'haircut',
    'cautionDay': '30',
  },
  '遊ぶ': {
    'id': 'enjoy',
    'cautionDay': '5',
  },
  '買い物': {
    'id': 'other',
    'cautionDay': '99',
  },
  'サウナ': {
    'id': 'hotspring',
    'cautionDay': '10',
  }
};


/**
 * textのタイトルを持つカレンダーのデータを取得するよ
 * 
 * @param string $text カレンダー検索対象の文字
 * 
 */
function getLastEvent(text, startDate, endDate) {
  // const now = new Date()
  // const startDate = Common_Date.getFirstDate(now);
  // const endDate = Common_Date.getLastDate(now);


  const calender = new Calender(text, startDate, endDate);

  if (!calender.count()) {
    return false;
  }
  const lastDate = calender.lastDate()
  const res = {
    name: text,
    lastDate: lastDate,
    count: calender.count(),
    startDate: startDate,
    endDate: endDate,
    isCaution: Common_Date.checkOverFromNow(lastDate, NAME_RELATION[text].cautionDay),
    passedDay: Common_Date.passedDay(lastDate),
    graph: { grapLabel: [1, 2, 3, 4], graphData: [3, 4, 5, 6] }
  }
  console.log(res);

  return JSON.stringify(res)
}

function setCalenderData(text, startDate, endDate) {
  if (!Common_Date.checkTime(startDate, endDate)) {
    throw new EvalError('No start and end')
  }
  const date = Common_Date.getStr(new Date());
  const start = new Date(date + ' 10:00:00');
  const end = new Date(date + ' 11:00:00');
  const Calender = new Calender(text)
  Calender.save(start, end)
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








