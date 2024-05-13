import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query {
        fetchBoard(number:4){
            number
            writer
            title
            contents
        }
    }
`


export default function StaticRoutingBoardMovePage(){
    const { data } = useQuery(FETCH_BOARD)
    console.log(data)

    return(
        <div>
            <div>1번 게시글 이동 완료</div>
            {/* data? 이렇게 ?을 붙이는 것을 옵셔널 체이닝이라 한다. */}
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            {/* 3항연산자 : 데이터가 없다면 로딩중입니다가 뜬다. */}
            <div>내용: {data? data.fetchBoard.contents : "로딩중입니다."}</div>
        </div>
    )
}