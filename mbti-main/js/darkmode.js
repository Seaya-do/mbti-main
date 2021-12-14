window.onload = function () {

    const btn = document.querySelector(".dark");
    let darkMode = localStorage.getItem("darkMode");

    // console.log(darkMode);

    const enableDarkMode = () => {
        document.body.classList.add("darkmode"); // 1. class 추가
        localStorage.setItem("darkMode", "enabled"); // 2. 스토리지에 다크모드 저장
    };

    const disableDarkMode = () => {
        document.body.classList.remove("darkmode"); // 1. class 삭제
        localStorage.setItem("darkMode", null); // 2. 스토리지에 저장된 다크모드를 null 값으로 변경
    };

    if (darkMode === 'enabled') { // 다크모드가 활성화 되었다면
        enableDarkMode();
    }

    // 다크모드 토글 버튼
    btn.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode'); 

        if (darkMode !== "enabled") { // 다크모드 활성
            enableDarkMode();
            // console.log(darkMode);
        } else { // 다크모드 비활성
            disableDarkMode();
            // console.log(darkMode);
        }
    });
};