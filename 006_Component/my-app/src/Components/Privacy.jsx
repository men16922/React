import "./privacy.css";

function Privacy({ name, phone, github }) {
  return (
    <section>
      <h2 className="name">개인정보</h2>
      <p>이름 : {name}</p>
      <p>전화번호 : {phone}</p>
      <p>github : {github}</p>
    </section>
  );
}
export default Privacy;
