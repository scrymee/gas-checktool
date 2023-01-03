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

  let isCaution = true
  let passedDay = 9999;
  let lastDate = false
  if (calender.count()) {
    lastDate = calender.lastDate()
    isCaution = Common_Date.checkOverFromNow(lastDate, NAME_RELATION[text].cautionDay)
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








