class Common_Date {

  static getYear(date) {
    return new Date(date).getFullYear()
  }
  static getMonth(date) {
    return new Date(date).getMonth() + 1;
  }
  static getDay(date) {
    return new Date(date).getDate()
  }
  /**
  * 曜日の文字列を返却
  * @return string
  */

  static getNow() {
    return Common_Date.getStr(new Date());
  }

  static getStr(date) {
    if (typeof (date) == 'undefined') {
      throw new TypeError('Error');
    }
    return this.getYear(date) + '/' + this.getMonth(date) + '/' + this.getDay(date)
  }
  static getStrYmdHi(date) {
    if (typeof (date) == 'undefined') {
      throw new TypeError('Error');
    }
    date = new Date(date)
    const dateTime = Common_Date.getStr(date)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return dateTime + ' ' + hours + ':' + minutes
  }

  static getNowYmdHi() {
    return Common_Date.getStrYmdHi(new Date());
  }

  /**
   * 月初の取得
   * @return string
   */
  static getFirstDate(date) {
    return this.getYear(date) + '/' + this.getMonth(date) + '/01';
  }
  /**
   * 月末の取得
   * @return string
   */
  static getLastDate(date) {
    const lastDate = new Date(this.getYear(date), this.getMonth(date), 0);
    return Common_Date.getStr(lastDate);
  }

  /*
  hour にはマイナスも指定可能
  */
  static calcHour(date, hour) {
    var res = new Date(date);
    res.setHours(res.getHours() + parseInt(hour));
    return Common_Date.getStrYmdHi(res);
  }
  /*
  dayにはマイナスも指定可能
  */
  static calcDay(date, day) {
    date = new Date(date);
    const res = new Date(date.getTime() + Number(day) * 24 * 60 * 60 * 1000);
    return Common_Date.getStr(res)
  }

  static checkTime(startDate, endDate) {
    return new Date(startDate) < new Date(endDate)
  }

  static checkOverFromNow(targetDate, cautionDay) {
    const passedDay = Common_Date.passedDay(targetDate)
    if (passedDay > cautionDay) {
      return true
    }
    return false
  }

  static convertFromLocalTime(date) {
    return date.replace(/T/g, ' ')
  }
  // 値をdatetime-localで定義し直す
  static convertToLocalTime(d) {
    d = new Date(d);
    const shift = d.getTime() + 9 * 60 * 60 * 1000;
    const time = new Date(shift).toISOString().split('.')[0];
    return time;
  }

  static passedDay(targetDate) {
    const passedTime = (new Date() - new Date(targetDate)) / 86400000;
    const passedDay = Math.floor(passedTime)
    return (passedDay > 0) ? passedDay : 0
  }

  static getMondayYmd(date) {
    date = new Date(date);
    // 日にちから曜日の数字を引いて１を加える
    let mondayDate = date.getDate() - date.getDay() + 1;
    const ret = new Date(date.getFullYear(), date.getMonth(), mondayDate);
    return Common_Date.getStr(ret);
  }
}



