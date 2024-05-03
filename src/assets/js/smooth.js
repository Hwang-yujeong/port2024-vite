import Lenis from "@studio-freight/lenis"; // import Lenis from "@studio-freight/lenis" 패키지로부터 Lenis 클래스를 가져옴

export function smooth() { // 외부에서 사용 가능한 export 함수
    //console.log(smooth)
    const lenis = new Lenis({ //Lenis 클래스의 인스턴스 생성, 이때 옵션 객체를 전달하여 스크롤 애니메이션의 속성을 설정, duration과 easing 속성을 설정
        duration:1, // 스크롤 애니메이션의 기간을 1초로 설정 즉 스크롤 애니메이션은 1초동안 진행
        easing:(t) => Math.min(1, 1.001-Math.pow(2,-10*t)), //스크롤 애니메이션의 가속도 함수를 정의, t는 시간에 대한 변수로서 스크롤애니메이션이 진행되는 동안 변화함
    });                                                     // 이 함수는 스크롤 애니메이션이 진행되는 동안 가속도를 조정하는데 사용 일종의 이징함수(easing function)로서, 빠르게 가속하다
                                                            // 느려지면서 스크롤 애니메이션이 부드럽게 완료되도록함
    function raf(time) { //raf라는 이름의 함수를 정의. 이 함수는 requestAnimationFrame을 이용하여 스크롤 애니메이션을 처리함
        lenis.raf(time); //Lenis 인스턴스의 raf 메서드의 호출하여 스크롤 애니메이션을 처리, 이 메서드는 주어진 시간에 대한 스크롤 애니메이션을 진항함
        requestAnimationFrame(raf); //raf함수를 requestAnimationFrame을 이용하여 반복 호출, 이렇게 하면 스크롤 애니메이션은 브라우저가 지원하는 최대 프레임 속도로 진행되며
    }                               //부드러운 애니메이션 효과를 얻을수 있음

    requestAnimationFrame(raf);

    lenis.on("scroll", (e) => { //Lenis 인스턴스에 scroll이벤트 리스너를 등록. 스크롤 애니메이션 진행 중에 scroll 이벤트가 발생할 때마다 이벤트 객체 e를 출력하는 
        console.log(e); //로그를 콘솔에 출력. scroll 이벤트는 Lenis 클래스가 스크롤애니메이션을 처리하는 동안 발생하는 이벤트,
    });
}