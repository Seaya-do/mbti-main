const results = document.querySelector(".re");

const rIndex = 0; //qIndexd에서 받은 질문을 넣을 변수
const endPoint = 80;
const endSelect = [];






function goResult(){
    let results = resultsList.find(v => v.types ==='INTP');
    console.log(results);

    document.getElementById("result").style.display = "block"; // result 섹션 보이게
    document.getElementById("test").style.display = "none"; // test 섹션 보이게
}

