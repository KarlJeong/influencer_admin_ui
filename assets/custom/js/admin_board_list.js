var data = [
    [
      "NOTICE",
      "공지사항",
      12,
      "2019-09-01",
      1
    ],
    [
      "FAQ",
      "자주묻는질문",
      31,
      "2019-09-01",
      0
    ],
    [
      "EVENT",
      "이벤트",
      3,
      "2019-09-01",
      0
    ]
  ];

$(function() {

  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

  var useStatuses = {
    0: ['미사용', 'danger'],
    1: ['사용', 'success']
  };

  $('#board-list').dataTable({
    data: data,
    "columns": [
      { "data": "0" },
      { "data": "1" },
      { "data": "2" },
      { "data": "3" },
      { "data": "4" }
    ],
    order: [[ 1, 'desc' ]],
    columnDefs: [{
      targets: [1],
      orderable: false,
      searchable: false
    }],
    searching: false,
    createdRow: function (row, data, index) {
      // Add extra padding and set minimum width
      $('td', row).addClass('py-2 align-middle').eq(1).css('min-width', '300px');

      // *********************************************************************
      // Product name

      $('td', row).eq(0).html('').append(
        '<div class="media align-items-center">' +
          '<a href="javascript:void(0)" class="media-body d-block text-body ml-3">' + data[0] + '</a>' +
        '</div>'
      );

      $('td', row).eq(1).html('').append(
        data[1]
      );

      $('td', row).eq(2).html('').append(
        numeral(data[2]).format('0,0')
      );

      $('td', row).eq(3).html('').append(
        data[3]
      );

      $('td', row).eq(4).html('').append(
        '<span class="badge badge-outline-' + useStatuses[data[4]][1] + '">' + useStatuses[data[4]][0] + '</span>'
      );


    }
  });

  // Tooltips

  $('body').tooltip({
    selector: '.product-tooltip'
  });

});
