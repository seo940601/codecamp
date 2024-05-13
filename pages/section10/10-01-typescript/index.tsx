export default function TypescriptPage() {
    // 타입추론
    let aaa = "안녕하세요"
    aaa = 3

    // 타입명시
    let bbb: string = "반갑습니다."
    bbb = 10

    // 타입명시가 필요한 상황
    let ccc: number | string = 1000
    ccc = "1000원"

    // 숫자타입
    let ddd: number = 10
    ddd = "철수"

    // boolean 타입
    let eee: boolean = true
    eee= false
    eee = "false" //백엔드에서 이런 식으로 받아올 수도 있다. 이는 true로 작동함

    // 배열타입
    let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"]
    let ggg: string[] = ["철수", "영희", "훈이", 10]
    let hhh: (string | number)[] = ["철수", "영희", "훈이", 10] // 타입을 추론해서 어떤 타입을 사용하는지 알아보기

    // 객체타입
    interface Iprofile {
        name: string
        age: number | string
        school: string
        hobby?: string // ?을 뒤에 붙이면 있어도 되고 없어도 된다는 뜻
    }

    const profile: Iprofile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile.name = "훈이" // 타입추론으로 이것만 가능
    profile.age = "8살"
    profile.hobby = "수영"

    // 함수타입
    function add(num1: number, num2: number, unit: string): string { // add():string은 return 값의 타입이 string을 의미한다.
        return num1 + num2 + unit
    }
    const result = add(1000, 2000, "원") //결과의 리턴 타입도 예측 가능

    // 함수타입
    const add2 = (num1: number, num2: number, unit: string): string => { // add():string은 return 값의 타입이 string을 의미한다.
        return num1 + num2 + unit
    }
    const result2 = add(1000, 2000, "원") //결과의 리턴 타입도 예측 가능

    // any 타입 (가급적 안쓰는게 좋다. 자바스크립트와 같음)
    let qqq: any = "철수"
    qqq = 123
    qqq = true

    return <></>
}