import "./Members.css";

const Members = () => {
  let members = require("./TeamMembers.json");
  let personalLinks = require("./MemberLinks.json");

  const compareStrings = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  };

  const compare = (a, b) => {
    const splitA = a.split(" ");
    const splitB = b.split(" ");
    const lastA = splitA[splitA.length - 1];
    const lastB = splitB[splitB.length - 1];

    return lastA === lastB
      ? compareStrings(splitA[0], splitB[0])
      : compareStrings(lastA, lastB);
  };

  members = members.sort(compare);

  let m = Math.ceil(members.length / 2);
  let firstHalf = members.slice(0, m);
  let secondHalf = members.slice(m);
  let memberLink;

  const arrayToItems = (array) => {
    return array.map((i) => {
      memberLink = personalLinks[i];
      return (
        <li>
          <a className="memberLink" target="_blank" href={memberLink}>
            {i}
          </a>
        </li>
      );
    });
  };
  return (
    <div className="section dark" id="Members">
      <div className="NAMESJUMBOTRON jumbotron">
        <p className="display-4">Çalışma Grubu</p>
        <p
          style={{
            textAlign: "center",
          }}
        ></p>
        <div className="row">
          <div className="col-sm-6">
            <ul>{arrayToItems(firstHalf)}</ul>
          </div>
          <div className="col-sm-6">
            <ul>{arrayToItems(secondHalf)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
