import {
  BoardBody,
  Title,
  FontSize,
  WriterPwd,
  WrPwdInput,
  UploadImg,
  AddrInput,
  AddrBtn,
} from "../../../styles/board";
export default function Boards() {
  return (
    <div>
      <BoardBody>
        <Title>게시물 등록</Title>
        <WriterPwd>
          <div>
            <FontSize>작성자</FontSize>
            <br />
            <WrPwdInput type="text" placeholder="이름을 적어주세요." />
          </div>
          <div>
            <FontSize>비밀번호</FontSize>
            <br />
            <WrPwdInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </WriterPwd>
        <FontSize>제목</FontSize>
        <input type="text" placeholder="제목을 작성해주세요." />
        <FontSize>내용</FontSize>
        <textarea
          cols="500"
          rows="20"
          placeholder="내용을 작성해주세요."
        ></textarea>
        <FontSize>주소</FontSize>
        <AddrInput type="text" placeholder="07250" />
        <AddrBtn>우편번호 검색</AddrBtn>
        <input type="text" />
        <input type="text" />
        <FontSize>유튜브</FontSize>
        <input type="text" placeholder="링크를 복사해주세요" />
        <FontSize>사진첨부</FontSize>
        <br />
        <div style={{ display: "flex" }}>
          <a href="#">
            <UploadImg src="/upload.png" alt="" />
          </a>
          <a href="#">
            <UploadImg src="/upload.png" alt="" />
          </a>
          <a href="#">
            <UploadImg src="/upload.png" alt="" />
          </a>
        </div>
        <FontSize>메인 설정</FontSize>
        <FontSize>
          <input type="checkbox" />
          유튜브
        </FontSize>
        <FontSize>
          <input type="checkbox" />
          사진
        </FontSize>
      </BoardBody>
    </div>
  );
}
