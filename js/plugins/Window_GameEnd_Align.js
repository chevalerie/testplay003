//=============================================================================
// Window_GameEnd_Align.js  2019/01/12
//=============================================================================

/*:
 * @plugindesc 「タイトルへ」と「やめる」の文字表示位置を中央揃えにするプラグイン
 * @help プラグインコマンドはありません。
 * "center"の部分を"left"で左揃え、"right"で右揃えになります。
 */

(function() {
		
Window_GameEnd.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
    this.resetTextColor();
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, 'center');
};
	
})(this);