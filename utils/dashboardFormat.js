export const dataFormatted = (data, radarParms) => {
  const filterDataBar = data.map((e) => {
    const prom =
      Math.floor(
        ((e.math +
          e.chinese +
          e.english +
          e.geography +
          e.history +
          e.physics) /
          6) *
          100
      ) / 100;

    return {
      name: e.first_name + " " + e.last_name,
      Promedio: prom,
    };
  });

  const mean = Object.keys(filterDataBar).reduce(function (previous, key) {
    return previous + filterDataBar[key].Promedio;
  }, 0);

  const meanFormatted = Math.floor((mean / filterDataBar.length) * 100) / 100;

  const list = data.map((e) => {
    return {
      id: e.id,
      name: `${e.first_name} ${e.last_name}`,
    };
  });

  const newUser = Object.keys(data[7]).splice(8, 13);

  const PolarUser = newUser.map((e) => {
    if (radarParms.length > 0) {
      return {
        subject: e,
        A: radarParms[0] ? data[radarParms[0] - 1][e] : null,
        B: radarParms[1] ? data[radarParms[1] - 1][e] : null,
        fullMark: 100,
      };
    } else {
      return null;
    }
  });

  const radarNameParams = [
    {
      name: data[radarParms[0] - 1]
        ? data[radarParms[0] - 1].first_name +
          " " +
          data[radarParms[0] - 1].last_name
        : null,
    },
    {
      name: data[radarParms[1] - 1]
        ? data[radarParms[1] - 1].first_name +
          " " +
          data[radarParms[1] - 1].last_name
        : null,
    },
  ];
  return {
    filterDataBar,
    meanFormatted,
    list,
    PolarUser,
    radarNameParams,
  };
};
