var data = [
    [
      "(주) 인플",
      "김나라",
      "123-123-123",
      "2019-04-04",
      1,
      2,
      ""
    ],
    [
      "소리나라",
      "정유진",
      "234-234-234",
      "2019-04-12",
      1,
      1,
      ""
    ],
    [
      "고려판촉",
      "김영춘",
      "820-9482-949",
      "2019-04-30",
      2,
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

  var campaignRegStatuses = {
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
      targets: [1],
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
        '<a href="javascript:void(0)" class="media-body d-block text-body ml-3" data-id="'+data[2]+'" data-toggle="modal" data-target="#managementModal">' + data[2] + '</a>'
      );

      // *********************************************************************
      // Status

      $('td', row).eq(3).html('').append(
        data[3]
      );

      $('td', row).eq(4).html('').append(
        '<span class="badge badge-outline-' + signupStatuses[data[4]][1] + '">' + signupStatuses[data[4]][0] + '</span>'
      );

      // *********************************************************************
      // Status

      $('td', row).eq(5).html('').append(
        '<span class="badge badge-outline-' + campaignRegStatuses[data[5]][1] + '">' + campaignRegStatuses[data[5]][0] + '</span>'
      );

      // *********************************************************************
      // Actions

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
