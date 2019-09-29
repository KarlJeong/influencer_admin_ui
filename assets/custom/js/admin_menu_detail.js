// jsTree
$(function() {
  $('#admin-menutree').jstree({
    core : {
      data : [
        {
          text: '캠페인 관리',
          state: {
            opened: true
          },
          children: [
            { text: '제품 관리', type: 'page' },
            { text: '캠페인 관리', type: 'page' },
          ],
        },
        {
          text: '통계'
        },
        {
          text: '정산'
        },
        {
          text: '게시판',
          state: {
            opened: true
          },
          children: [
            { text: '공지사항', type: 'page' },
            { text: '자주묻는질문', type: 'page' },
            { text: '이벤트', type: 'page' },
          ],
        },
        {
          text: '시스템관리',
          state: {
            opened: true
          },
          children: [
            { text: '회원 관리 - 광고주', type: 'page' },
            { text: '회원 관리 - 인플루언서', type: 'page' },
            { text: '게시판 관리', type: 'page' },
            { text: '코드 관리',
              state: {
                  opened: true
                },
                children: [
                  { text: '코드 그룹 관리', type: 'page' },
                  { text: '코드값 관리', type: 'page' },
                ]
             },
             { text: '메뉴 관리', type: 'page' },
          ],
        },
      ]
    },
    plugins: [ 'types' ],
    types: {
      default: { icon: 'ion ion-ios-folder text-warning' },
      page: { icon: 'ion ion-ios-document text-info' }
    }
  });
});
