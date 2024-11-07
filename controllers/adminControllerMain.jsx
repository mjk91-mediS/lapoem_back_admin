exports.mainPage = (req, res) => {
  // 필요한 데이터를 모델에서 가져올 수 있음 (예: 회원 정보, 통계 등)
  const data = {
      title: "La poeme Admin System",
      memberInfo: "가입 회원 정보", // 예시 데이터
      sections: [
          { name: "회원 관리", subItems: ["가입 회원 정보", "탈퇴 회원"] },
          { name: "실시간 도서", subItems: [] },
          { name: "도서 통계", subItems: [] },
          { name: "커뮤니티 관리", subItems: [] }
      ]
  };
  res.render('admin_main', data); // 템플릿에 데이터 전달
};
