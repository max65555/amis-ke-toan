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
  // allCheckBoxEventExecute()
  // ComboBoxExecution()
  sidebarSelectedMenuItem();
  ErrorMessageByFillingNothing( $('.normal-text-field__input--text[required]'))
  renderEmployeeData();
  ButtonClosePopUp($(".button__closePopup"), $(".popup-response-overlay"))
  loadDepartment();
  $('.add-new__department--input').attr("departmentId", "test2");
  console.log($('.add-new__department--input').attr("departmentId"));
  // checkboxClickAnimation();
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
    $("#btnSaveEmployee").attr("onclick", "btnSaveEvent()");
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
      // console.log(blockShowAndHide.parent().parent().parent().parent())
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
          // console.log(obj);
          // $(obj).parent().removeClass("checkbox__input-anim--checked");
          // $(obj).parent().addClass("checkbox__input-anim--unchecked");    
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
    // console.log($(this));
    blockShowAndHide.css('display', 'none')
    $('.add-new__department--input').val($(this).find('>:first-child').text())
    $('.add-new__department--input').attr("departmentId", $(this).find('>:first-child').attr("departmentId"));
    $(".combo-box__text--error").css("visibility", 'hidden');
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
      if (this.id == "data-table__all-check") {
        $(".checkbox__input-checkbox").each(function (i,obj) {
          $(obj).parent().removeClass("checkbox__input-anim--unchecked");
          $(obj).parent().addClass("checkbox__input-anim--checked");
        })
      } else {
        $(this).parent().removeClass("checkbox__input-anim--unchecked");
        $(this).parent().addClass("checkbox__input-anim--checked");
      }
    }
    else {
      if (this.id == "data-table__all-check") {
        $(".checkbox__input-checkbox").each(function (i,obj) {
          $(obj).parent().removeClass("checkbox__input-anim--checked");
          $(obj).parent().addClass("checkbox__input-anim--unchecked");
        })
      }
      else {
        $(this).parent().removeClass("checkbox__input-anim--checked");
        $(this).parent().addClass("checkbox__input-anim--unchecked");
        
      }
    }
  })
}

/** 
 * show and hide error message when there is nothing what user have inserted
 * Author: toanlk (29/10/2022)
 */
function ErrorMessageByFillingNothing(element) {
  // $(element).focus(function () {
  //   $(this).css('border', '1px solid #50b83c')
  // })
  $(element).focusout(function () {
    $(this).css('border', '1px solid #e0e0e0')
    if ($(this).val() == '') {
     ErrorMessageByPressSaveButton($(this),true)
    } else {
     ErrorMessageByPressSaveButton($(this),false)
      
    }
  })
  $(element).change(function () {
    if ($(this).val() == '') {
      ErrorMessageByPressSaveButton($(this),false);
    } else {
      $(this).css('border', '1px solid #50b83c')
    }
  })
 
}
function ErrorMessageByPressSaveButton(inputTag,isValidate) {
  if (isValidate) {
    inputTag.css('border', '1px solid red')
    inputTag
    .parent()
    .siblings('.normal-text-field__respond--text')
    .css('visibility', 'visible')
  }
  else {
    inputTag
        .parent()
        .siblings('.normal-text-field__respond--text')
        .css('visibility', 'hidden')
      inputTag.css('border', '1px solid #50b83c')
  }
}
/**
 * validate data fields
 * Author: toanlk (29/10/2022)
 */
function ValidateEmployeeData() {
  let isValidate = true
  $('.normal-text-field__input--text[required]').each(function (i, obj) {
    if ($(obj).val() == '') {
      ErrorMessageByPressSaveButton($(obj),true);
      isValidate = false
    }
  })
  if ($('.add-new__department--input').val() == '') {
    console.log("test1");
    // ErrorMessageByPressSaveButton($(this),true);
    $(".combo-box__text--error").css("visibility","visible");
    isValidate = false
  }
  return isValidate
}

/**
 * load department from api
 * Author: toanlk (29/10/2022)
 */
async function loadDepartment() {
  try {  
    let url= "https://amis.manhnv.net/api/v1/Departments";
    let response = await getAllAPIData(url);
    let html = "";
    response.forEach(function (departmentItem) {
      let htmlSegment = `
        <div
          class="combo-box-list__list-item add-new__department-combo-box-item">
          <span class="combo-box-list__list-item-text" departmentId="${departmentItem.DepartmentId}">${departmentItem.DepartmentName}</span>
        </div>
      `
      html += htmlSegment;
    })
    $(".combo-box-list__list")[0].innerHTML += html;
  }
  catch (e) {
    console.log(e);
  }

  ComboBoxExecution();

}

/**
 * save a instance of employee into database using api
 * Author: toanlk (29/10/2022)
 * //BUG
 */
function btnSaveEvent() {
  try{
    // $('#btnSaveEmployee').click(function () {
      // let isValidate = ValidateEmployeeData();
      let isValidate = ValidateEmployeeData();
      if (isValidate) {
        // thu thap du lieu
        let employeeCode = $(
          $('.normal-text-field__input--text[required]')[0]
          ).val()
          let employeeName = $(
            $('.normal-text-field__input--text[required]')[1]
            ).val()
        let department = $('.add-new__department--input').attr("departmentId");
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
          DepartmentId: department,
          Gender: gender,
          DateOfBirth: dateOfBirth,
          IdentityNumber: identityID,
        }
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
          ErrorResponse(data);
        })
        .catch((err) => {
          console.log(err);
        })
      }
      else {
        
      }
    // })
  }
  catch(e){
    console.log(e)
  }
}
/**
 * save a instance of employee into database using api
 * Author: toanlk (11/12/2022)
 */
async function getAllAPIData(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderEmployeeData() {
    let employees = await getAllAPIData('https://amis.manhnv.net/api/v1/Employees');
    let employeeHTMLItem = '';
    employees.forEach(employee => {
        let htmlSegment = ` <tr class="data-table__line">
                                        <td class="data-table__data-line data-table__header--checkbox">
                                            <div class="data-table__data-item">
                                                <div class="checkbox__container">
                                                    <input id="${employee.EmployeeId}" type="checkbox"
                                                        class="checkbox__input-checkbox data-table__header--input-checkbox">
                                                    <label for="${employee.EmployeeId}" class="checkbox__label">
                                                    </label>
                                                </div>
                                            </div>      
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">

                                                <div class="data-table__header-with-pic">
                                                    <span class="data-table__header--text">
                                                        ${employee.EmployeeCode}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                ${employee.EmployeeName}
                                            </div>

                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                              ${employee.gender}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                              ${employee.DateOfBirth}
                                            </div>

                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                ${employee.IdentityNumber}

                                            </div>

                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                  ${employee.PositionName}
                                            </div>

                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                ${employee.DepartmentName}
                                            </div>

                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                            ${employee.BankAccountNumber}
                                            </div>

                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                            ${employee.BankName}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line main-content__function_placeholder">
                                            <div class="data-table__data-item">
                                              ${employee.BankBranchName}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line main-content__function ">
                                            <div class="data-table__data-item" style="border-left:1px solid #e0e0e0">
                                                <div class="button button__link ">
                                                    <a onClick="updateEmployeeButton('${employee.EmployeeId}')"
                                                        class="button__link--text data-table__button-edit">Sửa</a>
                                                    <div class="data-table__button-dropdown-edit"
                                                        id="functional__dropdown-btn">
                                                        <i class="icofont-rounded-down dropdown__i--icon"></i>
                                                        <div style="display:none"
                                                            class="dropdown-list__list data-table__button-select-function">
                                                            <div class="dropdown-list__list-item">
                                                                <span class="dropdown-list__list-item-text">
                                                                    Nhân Bản
                                                                </span>
                                                            </div>
                                                            <div class="dropdown-list__list-item">
                                                                <span class="dropdown-list__list-item-text">
                                                                    Xóa
                                                                </span>
                                                            </div>
                                                            <div class="dropdown-list__list-item">
                                                                <span class="dropdown-list__list-item-text">
                                                                    Ngừng sử dụng
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>`;
        employeeHTMLItem += htmlSegment;
    });
    let container = document.querySelector('.data-table__wrapper');
    container.innerHTML += employeeHTMLItem;
    //fucntion will run after async fetch data finished
    checkboxClickAnimation();
    allCheckBoxEventExecute();
      DropdownShowAndHideFunctionalBar()
}
/**
 * Error handler while data is not valid to post to API by using error popup; 
 * Author: toanlk (15/12/2022)
 */
function ErrorResponse(res) {
  console.log(res);
  if (res != 1) {
    $(".popup-response-overlay").removeClass("display_none");
    $(".popup-response__main-text")[0].innerHTML = res.devMsg;
    $(".popup-response__main-icon-background").addClass("popup-response--error");
  }
  else {
    $(".popup-response-overlay").removeClass("display_none");
    $(".popup-response__main-text")[0].innerHTML = "thêm mới thành công";
    $(".popup-response__main-icon-background").addClass("popup-response--success");
  }
}
/**
 * 
 * Close a pop up by pressing button
 * Author: toanlk (15/12/2022)
 * @param {Button user's going to press} button 
 * @param {popup user's going to close} popUp 
 */
function ButtonClosePopUp(button,popUp) {
  button.click(function () {
    popUp.addClass("display_none");
  });

}

function updateEmployeeButton(employeeId) { 
  $('#popupAddNewEmployee').removeClass("display_none");
  $("#btnSaveEmployee").attr("onclick", "updateEmployeeSend()");
  console.log(employeeId);
}
/**
 * send update api to update a employee
 * Author: toanlk (15/12/2022)
 */
function updateEmployeeSend() {
  //update an employee
}