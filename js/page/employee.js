/**
 *
 */
// Document is ready
$(document).ready(function () {
	CloseFormAddNewEmployee();
	OpenFormAddNewEmployee();
	SelectedRowInDataTable();
	AddDropDownListShowUpEvent();
	ShowAndHideSideBar();
});
/**
 * close employee addition form by clicking close button
 * Author: ToanLK (18/10/2022)
 */
function CloseFormAddNewEmployee() {
	var usernameError = $('#employee-addition-form__close-button');
	var popUpAddNewEmployee = $('#popupAddNewEmployee');
	usernameError.on('click', function () {
		popUpAddNewEmployee.addClass('display_none');
		// console.log('test1');
	});
}
/**
 * Open employee addition form by clicking "thêm mới nhân viên" button
 * Author: ToanLK (18/10/2022)
 */
function OpenFormAddNewEmployee() {
	var usernameError = $('#btnTurnOnAddNewEmployeeForm');
	var popUpAddNewEmployee = $('#popupAddNewEmployee');
	usernameError.on('click', function () {
		popUpAddNewEmployee.removeClass('display_none');
		// console.log('test1');
	});
}
/**
 * change color of the line that is being selected in data table
 * Author: ToanLK (18/10/2022)
 */
function SelectedRowInDataTable() {
	$('.data-table__header--input-checkbox').click(function () {
		if ($(this).is(':checked')) {
			$(this)
				.parent('td')
				.parent('tr')
				.addClass('data-table__selected-row');
			$(this).unbind('mouseenter mouseleave');
		} else {
			$(this)
				.parent('td')
				.parent('tr')
				.removeClass('data-table__selected-row');
			$(this).on('hover');
		}
	});
}
/**
 * add event of showing up dropdown-list's body
 * Author: ToanLK (18/10/2022)
 */
function AddDropDownListShowUpEvent() {
	$('.data-table_button-dropdown-edit').click(function () {
		console.log($(this).children().eq(1));
	});
}
/**
 * scale up and down slide bar by
 * Author: ToanLK (21/10/2022)
 */
function ShowAndHideSideBar() {
	var sidebar = $('.sidebar');
	$('.header__left-side-menu-container').click(function () {
		if (sidebar.width() == 200) {
			sidebar.css('width', '56px');
			console.log('hide ');
		} else if (sidebar.width() == 56) {
			sidebar.css('width', '200px');
			console.log('hide ');
		}
	});
}
