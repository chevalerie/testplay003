//=============================================================================
// Org_ExcludeTimer.js
//=============================================================================

/*:
 * @plugindesc
 * [v0.1.0] .
 * 
 * @author KUROHIME kiryu
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc
 * [v0.1.0] タイマーを非表示にする。
 * 
 * @author 黒姫霧生
 *
 * @help パラメータとか分からんので、プラグインのコードを直接いじって調整してね。
 */
 
Sprite_Timer.prototype.updateVisibility = function() {
    this.visible = $gameTimer.isWorking() && $gameSwitches.value(66);  /*スイッチ66番がONの時に表示される*/
};