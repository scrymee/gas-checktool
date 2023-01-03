/**
 * URLにアクセスしたときに表示するhtmlファイル名
 */

function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  htmlOutput
    .setTitle('DashBoard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}


function ViewComponent(pathName) {
  return HtmlService.createHtmlOutputFromFile(pathName).getContent();
}

/**
 * ===============================
 * 
 * 
 * 日付クラス
 * 
 * 
 * ===============================
 */
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
  static getStr(date) {
    if (typeof (date) == 'undefined') {
      throw new TypeError('Error');
    }
    return this.getYear(date) + '/' + this.getMonth(date) + '/' + this.getDay(date)
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

  static calcHourDate(date, hour) {
    var now = new Date(date);
    now.setHours(now.getHours() + hour);
    return Common_Date.getStr(date);
    console.log(now.toLocaleString());
    console.log(an_hour_ago.toLocaleString());
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

  static convertDateLocalFormat(date) {
    return date.replace(/T/g, '-')
  }

  static passedDay(targetDate) {
    const passedTime = (new Date() - new Date(targetDate)) / 86400000;
    const passedDay = Math.floor(passedTime)
    return (passedDay > 0) ? passedDay : 0
  }
}



