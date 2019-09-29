var data = [
    [
      "핑크퐁",
      "2014-04-01",
      12948293,
      402932,
      "2019-09-01",
      1,
      ""
    ],
    [
      "KevingatesTV",
      "2015-03-05",
      3129382,
      182749,
      "2019-09-11",
      1,
      ""
    ],
    [
      "RedMusic",
      "2018-02-12",
      38498290,
      1982382,
      "2019-09-13",
      2,
      ""
    ]
  ];

$(function() {

  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

  var signupStatuses = {
    1: ['승인', 'success'],
    2: ['미승인', 'danger']
  };

  $('#member-list').dataTable({
    data: data,
    "columns": [
      { "data": "0" },
      { "data": "1" },
      { "data": "2" },
      { "data": "3" },
      { "data": "4" },
      { "data": "5" },
      { "data": "6" }
    ],
    order: [[ 1, 'desc' ]],
    columnDefs: [{
      targets: [5],
      orderable: false,
      searchable: false
    }],
    select: {
      style: 'multi'
    },
    searching: false,
    createdRow: function (row, data, index) {
      // Add extra padding and set minimum width
      $('td', row).addClass('py-2 align-middle').eq(0).css('min-width', '300px');

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
        numeral(data[3]).format('0,0')
      );

      $('td', row).eq(4).html('').append(
        data[4]
      );

      $('td', row).eq(5).html('').append(
        '<span class="badge badge-outline-' + signupStatuses[data[5]][1] + '">' + signupStatuses[data[5]][0] + '</span>'
      );

      $('td', row).eq(6).addClass('text-nowrap').html('').append(
        '<a href="javascript:void(0)" class="btn btn-default btn-xs icon-btn md-btn-flat product-tooltip" title="관리" data-id="'+data[2]+'" data-toggle="modal" data-target="#managementModal"><i class="ion ion-md-settings"></i></a>'
      );

    }
  });

  // Tooltips

  $('body').tooltip({
    selector: '.product-tooltip'
  });

});
