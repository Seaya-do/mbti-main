var q = document.querySelector('.qs'); // qs 클래스 요소 지정
let qIndex = 0; // 테스트 질문 인덱스 변수
const qNumber = 80; // 질문 갯수
const mySelect = []; // 응답 배열

const resultSelect = []; //전체 질문응답 배열



q.innerHTML = qnaList[qIndex].q; // 문제 표시
document.getElementById("result").style.display = "none"; // result 섹션 안보이게

const y = document.querySelector('.yes'); // 예 버튼
y.addEventListener('click', function () { // 예 버튼 클릭 이벤트
    var yesAnswer = qnaList[qIndex].a[0].type[0]; // 예 선택 type
    mySelect[qIndex] = yesAnswer; // 배열에 넣음
    // console.log(mySelect);
    goNext(++qIndex); // 다음 문제로 넘어감

    if (yesAnswer === qnaList[5].a[0].type[0]) { // 만약 79번째 문제라면
        goResult();        
        // 테스트 결과 함수
    }
});

const n = document.querySelector('.no'); // 아니오 버튼
n.addEventListener('click', function () {
    var noAnswer = qnaList[qIndex].a[1].type[0]; // 아니오 선택 type
    mySelect[qIndex] = noAnswer;
    console.log(mySelect);
    goNext(++qIndex);

    if (noAnswer === qnaList[5].a[1].type[0]) { // 만약 79번째 문제라면
        goResult();
        // 테스트 결과 함수
    }
});

function goNext(qIndex) { // 다음 문제 함수
    q.innerHTML = qnaList[qIndex].q; // 문제 표시
    var status = document.querySelector('.status'); // mySelect 진행바
    status.style.backgroundColor = "#222"; // 진행바 배경색 지정
    status.style.width = (100 / qNumber) * (qIndex + 1) + '%'; // 퍼센트 로직
}





//지정한 데이터값 출력, 입력받은 유형별로 문자로 더해서 맞는 값 출력하기



// 테스트 결과 함수 로직


//지정한 데이터값 출력, 입력받은 유형별로 문자로 더해서 맞는 값 출력하기