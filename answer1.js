let token = [];
function ingest(string) {
  token.push(string);
}

function appearance(string) {
  let arr = token.filter((item) => item.includes(string));
  return arr.length / token.length;
}
ingest("oursky:uk:dev");
ingest("oursky:hk:design");
ingest("oursky:hk:pm");
ingest("oursky:hk:dev");
ingest("skymaker");
console.log(appearance("oursky"));
//# > 0.8
console.log(appearance("oursky:hk"));
//# > 0.6
ingest("skymaker:london:ealing:dev");
ingest("skymaker:london:croydon");
ingest("skymaker:london:design");
ingest("skymaker:man:pm");
ingest("skymaker:man:pm");
console.log(appearance("skymaker:man"));
//# > 0.2
