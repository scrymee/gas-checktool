/**
 * ===============================
 * 
 * 
 * カレンダー情報を取得するクラス
 * 
 * 
 * ===============================
 */
class Calender {
  /**
   * 
   * @param string $text カレンダー検索対象の文字
   * @param string $startDate 開始日時（含む）
   * @param string $endDate 終了日時（含む）
   */
  // constructor(startDate, endDate, text) {
  constructor(text, startDate, endDate) {
    //------------------
    // Dateオブジェクトに変換
    //------------------
    if (typeof (text) != 'string') {
      throw new TypeError('Error');
    }
    this.text = text;
    if (startDate != undefined && endDate != undefined) {
      this.startDate = new Date(startDate + ' 00:00:00');
      this.endDate = new Date(endDate + ' 23:59:59');
    }
    this.calendar = CalendarApp.getCalendarById(CALENDER_ID)
  }

  /**
   * 指定日から指定日までの全イベントを取得する
   * @return void
   */
  allEvents() {
    return this.calendar.getEvents(this.startDate, this.endDate);
  }

  /**
   * 指定日から指定日までの「完全一致」の全イベントを取得する
   * @return void
   */
  // completeTarget() {
  //   const options = { search: this, text };
  //   return this.calendar.getEvents(this.startDate, this.endDate, options);
  // }

  /**
   * 指定日から指定日までの「部分一致の」全イベントを取得する
   * @return void
   */
  get() {
    if (typeof (this.startDate) != 'object' || typeof (this.endDate) != 'object') {
      throw new TypeError('Error');
    }

    let ret = [];
    for (let event of this.allEvents()) {
      // 指定された文字列がタイトルに含まれていなければ後続の処理を行わない
      if (event.getTitle().indexOf(this.text) == -1) continue;
      ret.push(event)
    }
    return ret;
  }
  /**
   * 指定日から指定日までの「部分一致の」全イベントを取得する
   * @return void
   */
  lastDate() {
    if (typeof (this.startDate) != 'object' || typeof (this.endDate) != 'object') {
      throw new TypeError('Error');
    }

    const events = this.get()
    const startObj = events[events.length - 1].getStartTime();
    return Common_Date.getStr(startObj)
  }

  /**
    * 指定したテキストのイベント数を取得する
    * @return void
    */
  count() {
    if (typeof (this.startDate) != 'object' || typeof (this.endDate) != 'object') {
      throw new TypeError('Error');
    }
    return this.get().length;
  }
  /**
   * 散髪ボタンをクリックしたときに呼び出す関数
   * 開始日の時間から、その１時間で散髪予定を入れる
  */
  save(startDate, endDate) {
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    if (typeof (startDate) != 'object' || typeof (endDate) != 'object') {
      throw new TypeError('Error');
    }
    this.calendar.createEvent(this.text, startDate, endDate);
    const res = {
      name: this.text,
    }
    return JSON.stringify(res)
  }
}