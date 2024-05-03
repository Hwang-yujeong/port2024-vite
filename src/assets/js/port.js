import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; //gsap의 ScroplTrigger 모듈을 가져옴, ScroplTrigger는 GSAP의 플러그인으로 스크롤에 반응하는 애미메이션을 쉽게 구현가능 할수 있도록도움

export function port() {
    // console.log(port)
    gsap.registerPlugin(ScrollTrigger); //ScroplTrigger를 GSAP에 등록, 이를 통해 ScroplTrigger를 사용하여 애니메이션을 정의할 수 있음
    const horSection = gsap.utils.toArray(".port__item"); //클래스 이름이 "port__item"인 모든 요소들을 선택하여 배열 horSection에 저장

    gsap.to(horSection, { //GSAP의 to 메서드를 사용하여 요소들에 요소들에 애니메이션을 적용 
        xPercent: -120 *(horSection.length -1), // 요소들을 가로 방향으로 배치하기 위해 xPercent 속성을 사용. 스크롤되면 120%만큼 이동하도록 설정
        ease:"none", // 애니메이션의 이징(easing)을 "none"으로 설정하여 일정한 속도로 애니메이션이 진행되도록 함
        scrollTrigger: { //ScroplTrigge를 이용하여 스크롤에 따라 애니메이션을 제어하는 옵션들을 설정
            trigger:"#port", //애니메이션을 시작할 트리거 요소로 #port 선택
            start:"top 56px", // 트리거 요소의 상단에서 56px 아래에서 애니메이션이 시작
            end:"+=3000", // 트리거 요소의 아래에서 3000px 아래에서 애니메이션이 끝남
            pin: true, // 애니메이션이 스크롤 범위 동안 고정
            scrub:1, //스크롤 시 애니메이션 속도에 비례하여 애니메이션이 진행
            makers:false, //디버깅을 위한 마커를 표시 하지 않음
            invalidateOnRefresh:true, //페이지 리스페시 시 ScroplTrigger 캐시를 재설정
            anticipatePin:1, // 고정된 상태로 애니메이션이 시작되기 전에 스크롤 위치에 따라 약간의 애니메이션을 효과를 부여
        },
    });
}