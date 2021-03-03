//=============================================================================
// Org_ExcludeItemEquip.js
//   Last update: 2019/10/30
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
 * [v0.1.0] アイテム画面の装備コマンドの部分を非表示にする。
 * 
 * @author 黒姫霧生
 *
 * @help パラメータとか分からんので、プラグインのコードを直接いじって調整してね。
 */
 
Window_ItemCategory.prototype.makeCommandList = function() {
    this.addCommand(TextManager.item,    'item');
//    this.addCommand(TextManager.weapon,  'weapon');
//    this.addCommand(TextManager.armor,   'armor');
    this.addCommand(TextManager.keyItem, 'keyItem');
};