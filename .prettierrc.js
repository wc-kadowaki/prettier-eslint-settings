module.exports = {
  /**
   * 折り返す行の長さ
   * @type {Number}
   * @default 80
   */
  printWidth: 80,
  /**
   * インデントのサイズ
   * @type {Number}
   * @default 2
   */
  tabWidth: 2,
  /**
   * インデントにスペースの代わりにタブを使うかどうか
   * @type {Boolean}
   * @default false
   */
  useTabs: false,
  /**
   * 文の後にセミコロンを付けるかどうか
   * @type {Boolean}
   * @default true
   */
  semi: true,
  /**
   * 文字列などをクォートで囲むときシングルクォートにするかどうか
   * @type {Boolean}
   * @default true
   */
  singleQuote: true,
  /**
   * 複数行の時の末尾のカンマを付けるかどうか
   * "es5" - es5で有効なところにはカンマを付けます。
   * "none" - 末尾のカンマは付けません。
   * "all" - 可能なところすべてに付けます。
   * @type {String}
   * @default "es5"
   */
  trailingComma: 'es5',
  /**
   * 複数行のHTML要素の閉じタグ「>」を最後の行に置くかどうか
   * @type {Boolean}
   * @default false
   */
  bracketSameLine: false,
  /**
   * 単独のアロー関数パラメータを括弧で囲むかどうか
   * "always" - 括弧を必ずつける
   * "avoid" - 可能な限り括弧を外す
   * @type {String}
   * @default "always"
   */
  arrowParens: 'always',
  /**
   * ファイルの先頭に特別なコメントを含むファイルのみフォーマットするように制限する
   * @type {Boolean}
   * @default false
   */
  requirePragma: true,
};
