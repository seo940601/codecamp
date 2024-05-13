import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {나의그래프큐엘셋팅} from './BoardWrite.queries'


// import * as S from './BoardWrite.styles' // export 한 번에 가져오기
// S.BlueButton
// S.RedInput

export default function BoardWrite(){
    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

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
         aaa = {onClickSubmit} 
         bbb = {onChangeWriter} 
         ccc = {onChangeTitle}
         ddd = {onChangeContents}
         />
    )
}