
/**
 * ===============================
 * 
 * 戻り値からHTMLを返却するクラス
 * 
 * ===============================
 * @param string $text カレンダー検索対象の文字
 * @param string $startDate 開始日時（yyyy/mm/dd 00:00:00)
 * @param string $endDate 終了日時(yyyy/mm/dd 00:00:00)
 */
class CreateHtml {
  constructor() {
  }
  /**
   * 散髪ボタンをクリックしたときに呼び出す関数
   * 開始日の時間から、その１時間で散髪予定を入れる
  */
  main() {
    this.calendar.createEvent(this.text, this.startDate, this.endDate);
    const res = {
      name: this.text,
      date: this.date
    }
    return JSON.stringify(res)
  }
}
