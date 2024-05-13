export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    // 그냥 innerText에다가 1을 더하면 문자열이기때문에 Number로 치환해서 1을 더해준다.
    const count = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = count;
  }

  function onClickCountDown() {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
