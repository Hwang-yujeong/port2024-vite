export function link() {
    //console.log(link)
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{ //문서(Document)에서 모든 앵커 요소를 선택함, 선택된 앵커 요소들들에 대해 forEach 메서드를 사용하여 각각의 앵커에 대한 아래의 콜백함수를 실행
        anchor.addEventListener("click", function(e) { //각 앵커 요소에 클릭 이벤트를 추가함, 클릭이벤트가 발생했을때 아래의 콜백 함수를 실행하도록함
            e.preventDefault(); // 클릭이벤트의 기본 동작을 막음, 여기서 앵커 요소를 클릭했을 때 해당 앵커의 href 속성에 지정된 링크로 이동하는 동작을 막음

            const targetId = this.getAttribute("href");// 클릭된 앵커의 href 속성 값을 가져와서 targetId 변수에 저장, getAttribute 메서드를 사용하여 앵커의 href 속성 값을 가져옴
            const targetElement = document.querySelector(targetId); //targetId에 저장된 값으로 문서내에 해당하는 요소를 선택함. document.querySelector(targetId)는 해당 targetId 값을 가진 요소를 찾아서 반환

            if(targetElement) { //미ㅏㅇ
                targetElement.scrollIntoView({behavior:"smooth"});
            }
        });
    });
}