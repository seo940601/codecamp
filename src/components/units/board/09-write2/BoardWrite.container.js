import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {나의그래프큐엘셋팅, UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from "next/router"


// import * as S from './BoardWrite.styles' // export 한 번에 가져오기
// S.BlueButton
// S.RedInput

export default function BoardWrite(props){
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            // 밑에서 variables는 $라는 뜻
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
        
    }

    const onCLickUpdate = async () => {
        const myvariables = {
            number: Number(router.query.number)
        }
        //writer !=== "" 과 같다.
        if(writer){ 
            myvariables.writer = writer
        }
        if(title){
            myvariables.title = title
        }
        if(contents){
            myvariables.contents = contents
        }



        //여기서 수정하자
        const result = await updateBoard({
            variables: myvariables
        })
        console.log(result)
        router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return(
        //BoardWriteUI에 보내주기 위한 작업
        <BoardWriteUI
            onClickSubmit = {onClickSubmit} 
            onClickUpdate = {onCLickUpdate}
            onChangeWriter = {onChangeWriter} 
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            isEdit = {props.isEdit}
            data = {props.data} //undefined 이거나, data이다.
         />
    )
}