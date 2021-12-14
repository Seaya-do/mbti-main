Kakao.init('key');
Kakao.isInitialized();
// const shareURL = url + 'page';

function start() {
    location.href = 'test.html';
}

function twt() { // 트위터 공유
    window.open("https://twitter.com/intent/tweet?text=간단한 MBTI 성격유형 TEST");
}

function kTalk() { // 카톡 공유
    Kakao.Link.createDefaultButton({
        container: '#CONTAINER_ID',
        objectType: 'feed',
        content: {
          title: '디저트 사진',
          description: '아메리카노, 빵, 케익',
          imageUrl:
            'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
          },
        },

        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
            },
          },
        ]
      });
}

function fb() { // 페북 공유
    window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse");
}

const sLink = document.querySelector('.share');
sLink.addEventListener('click', function() { // 주소 복사
    console.log("Hello");
    var tmp = document.createElement('textarea');
    tmp.value = 'www.주소'; // 주소 수정
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    alert("주소가 복사되었습니다!");
});