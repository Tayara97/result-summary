import data from "/data.json";
function Skill() {
  const elements = data.map((ele) => {
    return (
      <div key={ele.id} className={`skill ${ele.category}`}>
        <div className="title">
          <img src={ele.icon} alt={`${ele.category}`} />

          <h4>{ele.category}</h4>
        </div>
        <div className="score">
          <span>{ele.score} </span>/ 100
        </div>
      </div>
    );
  });
  return elements;
}
export default Skill;
