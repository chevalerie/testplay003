//=============================================================================
// Krd_LongPress.js
//=============================================================================

/*:
 * @plugindesc Long-press is multi-tap.
 * @author krd_data
 *
 * @param ChangeWindow
 * @desc ON : true / OFF : false
 * Default: true
 * @default true
 *
 * @param ChangeMap
 * @desc ON : true / OFF : false
 * Default: true
 * @default true
 *
 * @param ChangeNameInput
 * @desc ON : true / OFF : false
 * Default: true
 * @default true
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc クリックまたはタップの「長押し」で、「メニュー＆取り消し」を行います。
 * @author krd_data
 *
 * @param ChangeWindow
 * @desc ON : true / OFF : false
 * Default: true
 * @default true
 *
 * @param ChangeMap
 * @desc ON : true / OFF : false
 * Default: true
 * @default true
 *
 * @param ChangeNameInput
 * @desc ON : true / OFF : false
 * Default: true
 * @default true
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * マップでの長押しで、メニュー＆取り消しが発生するため、連続移動が出来なくなります。
 */

(function() {

	var parameters = PluginManager.parameters('Krd_LongPress');

    var changeWindow = String(parameters['ChangeWindow']);
    var changeMap = String(parameters['ChangeMap']);
	var changeNameInput = String(parameters['ChangeNameInput']);


	// ----------------------------------------------------
	// ウィンドウ関連
	// ----------------------------------------------------
	
	if (eval(changeWindow)) {
	
		Window_Selectable.prototype.processHandling = function() {
		    if (this.isOpenAndActive()) {
		        if (this.isOkEnabled() && this.isOkTriggered()) {
		            this.processOk();
		        } else if (this.isCancelEnabled() && this.isCancelTriggered()) {
		            this.processCancel();
		            TouchInput.clear();
		        } else if (this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
		            this.processPagedown();
		        } else if (this.isHandled('pageup') && Input.isTriggered('pageup')) {
		            this.processPageup();
		        }
		    }
		};

		Window_Selectable.prototype.isCancelTriggered = function() {
			if (TouchInput.isLongPressed()) {
				return true;
			}
		    return Input.isRepeated('cancel');
		};

	}

	// ----------------------------------------------------
	// マップ関連
	// ----------------------------------------------------

	if (eval(changeMap)) {

		Scene_Map.prototype.isFastForward = function() {
		    return ($gameMap.isEventRunning() && !SceneManager.isSceneChanging() &&
		            (Input.isLongPressed('ok') ));
		};

		Scene_Map.prototype.isMenuCalled = function() {
			if (TouchInput.isLongPressed()) {
				TouchInput.clear();
				return true;
			}
			return Input.isTriggered('menu') || TouchInput.isCancelled();
		};

	}

	// ----------------------------------------------------
	// 名前入力関連
	// ----------------------------------------------------

	if (eval(changeNameInput)) {

		Window_NameInput.prototype.processHandling = function() {
		    if (this.isOpen() && this.active) {
		        if (Input.isTriggered('shift')) {
		            this.processJump();
		        }
		        if (Input.isRepeated('cancel')) {
		            this.processBack();
		        }
				if (TouchInput.isLongPressed()) {
					TouchInput.clear();
					this.processBack();
				}
		        if (Input.isRepeated('ok')) {
		            this.processOk();
		        }
		    }
		};

	}

})();

