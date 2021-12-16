const result = document.querySelector("#result");
const qs = document.querySelector("#qs");

const rIndex = 0; //qIndexd에서 받은 질문을 넣을 변수






let one = qnaList[qIndex].a[0].type[0];
let two = qnaList[qIndex].a[1].type[0];
console.log(one,two);  //qnaList에서 qIndex I,E를 가져옴 비교를 해야함

function calResult(one, two){
    for (var i = 0, len = list.length; i < len; i++) {
        if (list[i].types == types) return list[i];

    }
}
console.log(calResult(resultsList,'INFP'));
r.innerHTML = calResult(resultsList, 'INFP').desc;
    


function setResult(){
    let endpoint = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = resultsList[endpoint].types;


    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = resultsList[endpoint].desc;
}


function goResult(){
    qs.style.WebkitAnimation = "fadeOut 1s";
    qs.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 450)})
    setResult();
}