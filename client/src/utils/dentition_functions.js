// import $ from 'jquery';

// export default function tooth_menu_item_click_handler(self) {
//   const el = $(self.target);
//   let str = '<ul>';
//   str += '<li class="toothStatus" data-id="1"
// style="background:#ededed">здоров</li>';
//   str += '<li class="toothStatus" data-id="2"
// style="background:#864909;color:#fff;">кариес</li>';
//   str += '<li class="toothStatus" data-id="3"
//  style="background:#064260;color:#fff;">пульпит</li>';
//   str += '</ul>';
//   $('body').append('<div id="toothpopup"></div>');

//   $('#toothpopup').html(str);

//   $('.toothStatus').click((self) => {
//     const el2 = $(self.target);
//     el.context.style.backgroundColor = el2.context.style.backgroundColor;
//     $('#toothpopup').dialog('close');
//   });
//   $('#toothpopup').dialog({
//     autoOpen: false,
//     width: 300,
//     height: 300,
//     title: 'Выберите статус зуба',
//     modal: true,
//   });
//   $('#toothpopup').dialog('open');
//   // alert(1);
// }
