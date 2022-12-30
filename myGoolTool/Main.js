// const CALENDER_ID = 'XXXXXXXXX';

const DATA = [
  {
    'id': 'haircut',
    'name': '散髪',
    'cautionDay': '30',
    'graph': 'Daily', // daily false
  },
]

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
function getLastEvent(text) {
  const now = new Date()
  const startDate = Common_Date.getFirstDate(now);
  const endDate = Common_Date.getLastDate(now);


  const getCalender = new GetCalender(startDate, endDate, text);

  const res = {
    name: text,
    lastDate: getCalender.lastDate()
  }
  console.log(res);

  return JSON.stringify(res)
}

function setCalenderData(text) {
  const now = new Date()
  const startDate = Common_Date.getFirstDate(now);
  const endDate = Common_Date.getLastDate(now);
  if (!Common_Date.checkTime(startDate, endDate)) {
    throw new EvalError('No start and end')
  }
  const setCalender = new setCalender(startDate, endDate, text)
  setCalender.main()
}











