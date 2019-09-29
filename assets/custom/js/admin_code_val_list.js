var data = [
    [
      "REVIEW",
      "인플루언서 유형",
      "리뷰",
      "2019-09-01",
      1,
      ""
    ],
    [
      "GAME",
      "인플루언서 유형",
      "게임",
      "2019-09-01",
      1,
      ""
    ],
    [
      "TRAVEL",
      "인플루언서 유형",
      "여행",
      "2019-09-01",
      1,
      ""
    ],
    [
      "VLOG",
      "인플루언서 유형",
      "VLOG",
      "2019-09-01",
      1,
      ""
    ]
  ];

$(function() {

  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

  var useStatuses = {
    0: ['미사용', 'danger'],
    1: ['사용', 'success']
  };

  $('#code-grp-list').dataTable({
    data: data,
    "columns": [
      { "data": "0" },
      { "data": "1" },
      { "data": "2" },
      { "data": "3" },
      { "data": "4" },
      { "data": "5" }
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
      $('td', row).addClass('py-2 align-middle').eq(1).css('min-width', '150px');
      $('td', row).addClass('py-2 align-middle').eq(2).css('min-width', '150px');

      // *********************************************************************
      // Product name

      $('td', row).eq(0).html('').append(
        '<div class="media align-items-center">' +
          '<a href="admin_code_val_detail.html" class="media-body d-block text-body ml-3">' + data[0] + '</a>' +
        '</div>'
      );

      $('td', row).eq(1).html('').append(
        data[1]
      );

      $('td', row).eq(2).html('').append(
        data[2]
      );

      $('td', row).eq(3).html('').append(
        data[3]
      );

      $('td', row).eq(4).html('').append(
        '<span class="badge badge-outline-' + useStatuses[data[4]][1] + '">' + useStatuses[data[4]][0] + '</span>'
      );

      $('td', row).eq(5).html('').append(
        '<a href="admin_code_val_detail.html" class="btn btn-default btn-xs icon-btn md-btn-flat product-tooltip" title="관리"><i class="ion ion-md-settings"></i></a>'
      );



    }
  });

  // Tooltips

  $('body').tooltip({
    selector: '.product-tooltip'
  });

});
