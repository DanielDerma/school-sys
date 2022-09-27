export const dataFormatted = (data) => {
  const fixedW = (num) => Math.round(num * 100) / 100;

  const filterDataBar = data.map((e, i) => {
    const prom =
      (e.ranks.u1 +
        e.ranks.u2 +
        e.ranks.u3 +
        e.ranks.u4 +
        e.ranks.u5 +
        e.ranks.u6) /
      6;

    const promC = {
      name: e.email,
      Promedio: fixedW(prom),
    };
    return promC;
  });

  const allsum = filterDataBar.reduce((acc, cur) => {
    return acc + cur.Promedio;
  }, 0);

  //mean
  const mean = fixedW(allsum / filterDataBar.length);

  const list = data.map((e) => {
    return {
      id: e.email,
      name: e.fname + " " + e.lname,
      tel: e.contact_add,
    };
  });

  return {
    filterDataBar,
    filterDataBar,
    list,
    mean,
  };
};

export const dataForRadar = (data, radarParams) => {
  const polarList = ["u1", "u2", "u3", "u4", "u5", "u6"];
  const polarListC = ["U1", "U2", "U3", "U4", "U5", "U6"];
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
    polarUser,
  };
};
