//컴포넌트는 <div>로 벽을 치는게 안전하다.
export default function BoardComponent(props){
    return (
        <div>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            제목: <input type="text" />
            내용: <input type="text" />
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </div>
    )
}