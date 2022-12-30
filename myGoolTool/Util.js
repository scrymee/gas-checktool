/**
 * URLにアクセスしたときに表示するhtmlファイル名
 */

function doGet(e) {
  // URLのexec/(またはdev/)以降を取得
  const page = e.pathInfo ? e.pathInfo : "index"
  // 該当するテンプレートを取得する
  const template = (() => {
    try {
      return HtmlService.createTemplateFromFile(page);
    } catch (e) {
      return HtmlService.createTemplateFromFile("error");
    }
  })();

  // htmlを返す
  template.url = ScriptApp.getService().getUrl();   // テンプレートにアプリのURLを渡す
  return template.evaluate()                        // テンプレートを評価してhtmlを返す
    .setTitle("テストサイト")                           // タイトルをセット
    .addMetaTag('viewport', 'width=device-width,initial-scale=1');  // viewportを設定
}

/**
 * 現在のアプリのURLを返却する
 */
function getAppUrl() {
  return ScriptApp.getService().getUrl();
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
    console.log('A');
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
}



