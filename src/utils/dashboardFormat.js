export const dataFormatted = (data, radarParams) => {
  const polarList = ["u1", "u2", "u3", "u4", "u5", "u6"];
  const polarListC = ["U1", "U2", "U3", "U4", "U5", "U6"];

  const filterDataBar = data.map((e, i) => {
    // sum all object and mean

    const prom =
      (e.ranks.u1 +
        e.ranks.u2 +
        e.ranks.u3 +
        e.ranks.u4 +
        e.ranks.u5 +
        e.ranks.u6) /
      6;
    return {
      name: e.email,
      Promedio: prom,
    };
  });

  const list = data.map((e) => {
    return {
      id: e.email,
      name: e.fname + " " + e.lname,
      tel: e.contact_add,
    };
  });

  // sort the list object by name

  const mean = Object.keys(filterDataBar).reduce(function(previous, key) {
    return previous + filterDataBar[key].Promedio;
  }, 0);

  console.log("entre a: mean", mean);

  const listPolarUser = radarParams.map((a) => {
    const result = data.filter((d) => {
      return d.email == a;
    });
    return result;
  });

  const polarUser = polarList.map((e, i) => {
    if (radarParams.length > 0) {
      return {
        subject: polarListC[i],
        A: listPolarUser[0] ? listPolarUser[0][0].ranks[e] : 0,
        B: listPolarUser[1] ? listPolarUser[1][0].ranks[e] : 0,
        fullMark: 10,
      };
    } else {
      return {
        subject: polarListC[i],
        A: 0,
        B: 0,
        fullMark: 10,
      };
    }
  });

  return {
    filterDataBar,
    mean,
    list,
    polarUser,
  };
};
