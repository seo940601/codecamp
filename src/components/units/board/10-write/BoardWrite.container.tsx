import { useMutation } from "@apollo/client"
import { useState, ChangeEvent } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {나의그래프큐엘셋팅, UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from "next/router"
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types"



// import * as S from './BoardWrite.styles' // export 한 번에 가져오기
// S.BlueButton
// S.RedInput

export default function BoardWrite(props: IBoardWriteProps){
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
        router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)
        
    }

    const onCLickUpdate = async () => {

        const myvariables: IMyvariables = {
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
        router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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