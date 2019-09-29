var data = [
    [
      "1",
      "자주묻는 질문 001",
      "2019-09-01",
      0,
      ""
    ],
    [
      "2",
      "  ㄴ자주묻는 질문 001 대답",
      "2019-09-01",
      0,
      ""
    ],
    [
      "3",
      "자주묻는 질문 002",
      "2019-09-01",
      1,
      ""
    ],
    [
      "4",
      " ㄴ자주묻는 질문 002 대답",
      "2019-09-01",
      1,
      ""
    ]
  ];

$(function() {

  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

  var useStatuses = {
    0: ['미삭제', 'success'],
    1: ['삭제', 'danger']
  };

  $('#board-list').dataTable({
    data: data,
    "columns": [
      { "data": "0" },
      { "data": "1" },
      { "data": "2" },
      { "data": "3" }
    ],
    order: [[ 0, 'asc' ]],
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
        numeral(data[0]).format('0,0')
      );

      $('td', row).eq(1).html('').append(
        '<div class="media align-items-center">' +
          '<a href="admin_board_article.html" class="media-body d-block text-body ml-3">' + data[1] + '</a>' +
        '</div>'
      );

      $('td', row).eq(2).html('').append(
        data[2]
      );

      $('td', row).eq(3).html('').append(
        '<span class="badge badge-outline-' + useStatuses[data[3]][1] + '">' + useStatuses[data[3]][0] + '</span>'
      );


    }
  });

  // Tooltips

  $('body').tooltip({
    selector: '.product-tooltip'
  });

});
