$(document).ready(function () {
	// DisableClick('.dropdown__i--icon');
});
/**
 * disable a element from being clicked
 * Author: toanlk (29/10/2022)
 * @param {element be disabled to click} element
 */
function DisableClick(element) {
	$(element).click(function () {
		return false;
	});
}
