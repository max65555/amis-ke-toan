/**
 *
 */
// Document is ready
$(document).ready(function () {
  CloseFormAddNewEmployee()
  OpenFormAddNewEmployee()
  SelectedRowInDataTable()
  AddDropDownListShowUpEvent()
  ShowAndHideSideBar()
  DropDownShowAndHideHub()
  DropdownShowAndHideFunctionalBar()
  allCheckBoxEventExecute()
  ComboBoxExecution()
  sidebarSelectedMenuItem();
  ErrorMessageByFillingNothing()
  btnSaveEvent()
  checkboxClickAnimation();
  // ValidateDate();
  // hideExtraBlockWhileClickedOutSideHub();
})
/**
 * close employee addition form by clicking close button
 * Author: ToanLK (18/10/2022)
 */
function CloseFormAddNewEmployee() {
  try {
    var usernameError = $('#employee-addition-form__close-button')
    var popUpAddNewEmployee = $('#popupAddNewEmployee')
    usernameError.on('click', function () {
      popUpAddNewEmployee.addClass('display_none')
      // console.log('test1');
    })
  } catch (e) {}
}
/**
 * Open employee addition form by clicking "thêm mới nhân viên" button
 * Author: ToanLK (18/10/2022)
 */
function OpenFormAddNewEmployee() {
  try {
    var usernameError = $('#btnTurnOnAddNewEmployeeForm')
    var popUpAddNewEmployee = $('#popupAddNewEmployee')
    usernameError.on('click', function () {
      popUpAddNewEmployee.removeClass('display_none')
      // console.log('test1');
    })
  } catch (e) {}
}
/**
 * change color of the line that is being selected in data table
 * Author: ToanLK (18/10/2022)
 */
function SelectedRowInDataTable() {
  try {
    $('.data-table__header--input-checkbox').click(function () {
      if ($(this).is(':checked')) {
        $(this).parent('td').parent('tr').addClass('data-table__selected-row')
        $(this).unbind('mouseenter mouseleave')
      } else {
        $(this)
          .parent('td')
          .parent('tr')
          .removeClass('data-table__selected-row')
        $(this).on('hover')
      }
    })
  } catch (e) {}
}
/**
 * add event of showing up dropdown-list's body
 * Author: ToanLK (18/10/2022)
 */
function AddDropDownListShowUpEvent() {
  try {
    $('.data-table_button-dropdown-edit').click(function () {
      console.log($(this).children().eq(1))
    })
  } catch (e) {}
}
/**
 * scale up and down slide bar by
 * Author: ToanLK (21/10/2022)
 */
function ShowAndHideSideBar() {
  var sidebar = $('.sidebar')
  $('#menu-btn').click(function () {
    if (sidebar.width() == 200) {
      // hide sidebar
      sidebar.css('width', '56px')
      $('.sidebar__item--label').css('display', 'none')
      $('.sidebar__header').css('visibility', 'hidden')
      $('#menu-btn').css('left', '0')
      $('#menu-btn').addClass('menu-btn--scale-down')
      $('.main-wrapper').css('width', 'calc(100% - 56px)')
      console.log('hide ')
    } else if (sidebar.width() <= 56) {
      // show sidebar
      sidebar.css('width', '200px')
      $('.sidebar__header').css('visibility', 'visible')
      $('.sidebar__item--label').css('display', 'inline')

      $('#menu-btn').css('left', '')
      $('#menu-btn').removeClass('menu-btn--scale-down')
      $('.main-wrapper').css('width', 'calc(100% - 200px)')
      console.log('show ')
    }
  })
}
/**
 * show and hide dropDown List
 * Author: ToanLK (25/10/2022)
 */
function DropDownDropDownList(button, blockShowAndHide) {
  button.click(function () {
    let isDisplay = blockShowAndHide.css('display') == 'none'
    if (isDisplay) {
      blockShowAndHide.css('display', 'block')
    } else if (!isDisplay) {
      blockShowAndHide.css('display', 'none')
    }
  })
}

/**
 * 	show and hide hub
 *  Author: ToanLK(25/10/2022)
 * */
function DropDownShowAndHideHub() {
  DropDownDropDownList($('#show-pages-btn'), $('#show-pages-list'))
  DropDownDropDownList(
    $('#functional__dropdown-btn'),
    $(this).children('.data-table__button-select-function')
  )
}
/**
 *   show and hide functional dropdown in data table
 * Author:toanlk (29/10/2022)
 */
function DropdownShowAndHideFunctionalBar() {
  $('.data-table__button-dropdown-edit').click(function () {
    blockShowAndHide = $(this).children().eq(1)
    let isDisplay = blockShowAndHide.css('display') == 'none'
    if (isDisplay) {
      //hide all element before show up
      trigger = '.dropdown-list__list'
      $(trigger).each(function (i, obj) {
        $(obj).css('display', 'none')
      })
      $('.data-table__data-line').each(function (i, obj) {
        $(obj).css('z-index', '1')
      })
      blockShowAndHide.css('display', 'block')
      blockShowAndHide
        .parent()
        .parent()
        .parent()
        .parent()
        .css('z-index', '1000')
      console.log(blockShowAndHide.parent().parent().parent().parent())
    } else {
      $('.data-table__data-line').each(function (i, obj) {
        $(obj).css('z-index', '999')
      })
      blockShowAndHide.css('display', 'none')
    }
  })
}
/**
 * hide drop down part while click outside the active area of dropDownList
 * Author: ToanLK (25/10/2022)
 * @param {the button that click to hide and show} trigger
 * @param {dropdownlist suppose to be hide and show}}dropdownlist
 */
function HideExtraBlockWhileClickOutSide(trigger, dropdownlist) {
  $(document).on('click', function (event) {
    var $trigger = $(trigger)
    console.log(event.target)
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      console.log('go to hide')

      $(dropdownlist).css('display', 'none')
    }
  })
}

// function hideExtraBlockWhileClickedOutSideHub() {
// 	HideExtraBlockWhileClickOutSide('#show-pages-btn', '#show-pages-list');
// 	HideExtraBlockWhileClickOutSide(
// 		'.data-table__button-dropdown-edit',
// 		'.data-table__button-select-function'
// 	);
// }
/**
 * check all check box if user checks allCheckBox checkBox and unchecked when user unchecked one of them
 * Author:toanlk (29/10/2022)
 */
function allCheckBoxEventExecute() {
  //when headerCheckBox checked
  let allCheckBox = $('.data-table__header--input-checkbox')
  $('#data-table__all-check').change(function () {
    if (this.checked) {
      allCheckBox.each(function (i, obj) {
        $(obj).prop('checked', true)
      })
    } else {
      allCheckBox.each(function (i, obj) {
        $(obj).prop('checked', false)
      })
    }
  })
  //when unchecked non-headerCheckBox checked
  allCheckBox.change(function () {
    $('#data-table__all-check').prop('checked', false)
  })
}
/**
 * show and hide comboBox by focusing or click button,change color while focusing
 * Author: toanlk (29/10/2022)
 */
function ComboBoxExecution() {
  let blockShowAndHide = $('.add-new__department-combo-box-list--list')
  $('.add-new__department-combobox--icon').click(function () {
    let isDisplay = blockShowAndHide.css('display') == 'none'
    if (isDisplay) {
      $(this).parent().css('border', '1px solid #50b83c')
      blockShowAndHide.css('display', 'block')
    } else if (!isDisplay) {
      $(this).parent().css('border', '1px solid #e0e0e0')
      blockShowAndHide.css('display', 'none')
    }
  })
  $('.combo-box__input-text').focus(function () {
    $(this).parent().css('border', '1px solid #50b83c')
  })
  $('.combo-box__input-text').focusout(function () {
    $(this).parent().css('border', '1px solid #e0e0e0')
  })
  $('.add-new__department-combo-box-item').click(function () {
    blockShowAndHide.css('display', 'none')
    console.log($('.add-new__department-combobox--icon'))
    $('.add-new__department--input').val($(this).find('>:first-child').text())
  })
}
/**
 * definite what sidebar-menu-item is being selected by border-left color
 * Author : toanlk (29/10/2022)
 */
function sidebarSelectedMenuItem() {
  let sidebarMenuItem = $(".sidebar__menu--item");
  sidebarMenuItem.click(function () {
    sidebarMenuItem.each(function (i, obj) {
      $(obj).removeClass("sidebar__menu-item-selected");
    });
    $(this).addClass("sidebar__menu-item-selected");
  })
}
/**
 * rotate checkbox every time user changes checkbox value 
 * Author: toanlk (13/12/2022)
 */
function checkboxClickAnimation() {
  let checkboxInput = $(".checkbox__input-checkbox");  
  checkboxInput.change(function () {
    if (this.checked) {
      console.log("test1");
      $(".checkbox__container").removeClass("checkbox__input-anim--unchecked");
      $(".checkbox__container").addClass("checkbox__input-anim--checked");
    }
    else {
      console.log("test2");
      $(".checkbox__container").removeClass("checkbox__input-anim--checked");
      $(".checkbox__container").addClass("checkbox__input-anim--unchecked");
    }
  })
}








/** 
 * show and hide error message when there is nothing what user have inserted
 * Author: toanlk (29/10/2022)
 */
function ErrorMessageByFillingNothing(element) {
  element = $('.normal-text-field__input--text[required]')
  $(element).focus(function () {
    $(this).css('border', '1px solid #50b83c')
  })
  $(element).focusout(function () {
    $(this).css('border', '1px solid #e0e0e0')
    if ($(this).val() == '') {
      console.log('is empty')
      $(this).css('border', '1px solid red')
      $(this)
        .parent()
        .siblings('.normal-text-field__respond--text')
        .css('visibility', 'visible')
      // isValidate = true;
    } else {
      $(this)
        .parent()
        .siblings('.normal-text-field__respond--text')
        .css('visibility', 'hidden')
      console.log('is  not empty')
      $(this).css('border', '1px solid #50b83c')
    }
  })
  $(element).change(function () {
    console.log('changing')
    if ($(this).val() == '') {
      console.log('is empty')
      $(this).css('border', '1px solid red')
      $(this)
        .parent()
        .siblings('.normal-text-field__respond--text')
        .css('visibility', 'visible')
    } else {
      console.log('is  not empty')
      $(this).css('border', '1px solid #50b83c')
    }
  })
}
/**
 * validate data fields
 * Author: toanlk (29/10/2022)
 */
function ValidateEmployeeData() {
  let isValidate = true
  $('.normal-text-field__input--text[required]').each(function (i, obj) {
    if ($(obj).val() == '') {
      isValidate = false
    }
  })
  if ($('.add-new__department--input').val() == '') {
    isValidate = false
  }
  return isValidate
}
/**
 * save a instance of employee into database using api
 * Author: toanlk (29/10/2022)
 * //BUG
 */
function btnSaveEvent() {
  $('#btnSaveEmployee').click(function () {
    // let isValidate = ValidateEmployeeData();
    console.log('go to button')
    let isValidate = ValidateEmployeeData()
    if (isValidate) {
      // thu thap du lieu
      let employeeCode = $(
        $('.normal-text-field__input--text[required]')[0]
      ).val()
      let employeeName = $(
        $('.normal-text-field__input--text[required]')[1]
      ).val()
      let department = $('.add-new__department--input').val()
      let dateOfBirth = $('#date-of-birth').val()
      let gender
      if ($('.selection-position__check-box[name="gender"]')[0].checked) {
        gender = 0
      }
      if ($('.selection-position__check-box[name="gender"]')[1].checked) {
        gender = 1
      }
      if ($('.selection-position__check-box[name="gender"]')[2].checked) {
        gender = 2
      }
      let identityID = $('.employee-addition__identity-id').val()
      let employee = {
        EmployeeCode: employeeCode,
        EmployeeName: employeeName,
        departmentId: '142cb08f-7c31-21fa-8e90-67245e8b283e',
        Gender: gender,
        DateOfBirth: dateOfBirth,
        IdentityNumber: identityID,
      }
      console.log(employee)
      //API to save an employee
      // $.ajax({
      // 	type: 'POST',
      // 	url: 'https://amis.manhnv.net/api/v1/employees',
      // 	data: JSON.stringify(employee),
      // 	dataType: 'json',
      // 	contentType: 'application/json',
      // 	success: function (response) {
      // 		console.log(response);
      // 	},
      // });
      var statusCode = null
      fetch('https://amis.manhnv.net/api/v1/employees', {
        method: 'POST',
        body: JSON.stringify(employee),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          var statusCode = res.status
          return res.json()
        })
        .then((data) => {
          // console.log(res);
          alert(data.data.EmployeeCode[0])
        })
        .catch((res) => {
          console.log(res)
        })
    } else {
      console.log('false')
    }
  })
}
/**
 * save a instance of employee into database using api
 * Author: toanlk (11/12/2022)
 */
function loadEmployeeData() {}
