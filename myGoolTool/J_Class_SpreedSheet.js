/**
 * ===============================
 * 
 * 
 * スプレッドシート関連のクラス
 * 
 * 
 * ===============================
 */
class SpreedSheet {
  /**
   * 
   * @param string $text カレンダー検索対象の文字
   * @param string $startDate 開始日時（含む）
   * @param string $endDate 終了日時（含む）
   */
  constructor(sheetName) {
    if (sheetName == undefined) {
      throw TypeError('No type')
    }
    // スプレッドシート＆シートオブジェクトを取得
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    this.sheet = sheet;
  }

  getCell(cellNum) {
    // A2などを指定する
    return this.sheet.getRange(cellNum).getValue();
  }
  setCell(cellNum, value) {
    if (cellNum == 'A1' || cellNum == 'B1' || cellNum == 'C1') {
      throw new Error('1isError')
    }
    // A2などを指定する
    return this.sheet.getRange(cellNum).setValue(value);
  }
  getLastColumn() {
    return this.sheet.getLastColumn();
  }
  getLastRow() {
    //最終列の数字を表示する
    return this.sheet.getLastRow();
  }
}

/**
 * ===============================
 * 
 * 100リストスプレッドシート関連のクラス
 * 
 * ===============================
 */
class List100Sheet extends SpreedSheet {
  constructor() {
    super('100リスト')
  }
  getAllTitleArr() {
    const start = 2;
    let ret = [];
    for (let i = start; i <= this.getLastRow(); i++) {
      ret.push(this.getTitle(i))
    }
    return ret
  }
  getTitle(num) {
    //B2とかを指定する
    return super.getCell('B' + num)
  }
  check(num, value) {
    //C2とかを指定する
    return super.setCell('C' + num, value)
  }
  isChecked(num) {
    //C2とかを指定する
    return super.getCell('C' + num) ? true : false;
  }
}
/**
 * ===============================
 * 
 * 目標スプレッドシート関連のクラス
 * 
 * ===============================
 */
class GoalSheet extends SpreedSheet {
  constructor() {
    super('目標')
  }
  getTitle(num) {
    //B2とかを指定する
    return super.getCell('B' + num)
  }
  check(num, value) {
    //C2とかを指定する
    return super.setCell('C' + num, value)
  }
  isChecked(num) {
    //C2とかを指定する
    return super.getCell('C' + num) ? true : false;
  }
}
