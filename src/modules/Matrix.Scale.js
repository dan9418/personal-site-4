import Preset from './Matrix.Scale.presets';
import * as Utils from './Utils';

const getMode = ({ scale, degree }) => {
  let mode = [...scale];
  mode = Utils.rotate(mode, degree);
  const a = mode[0];
  const newMode = mode.map((m) => {
    // console.log(m.p, Utils.moduloSum(m.p, 2, 12, 0, false));
    return {
      d: Utils.moduloSum(m.d, a.d, 7, 0, true),
      p: Utils.moduloSum(m.p, a.p, 12, 0, true)
    };
  });
  console.log(mode, newMode);

  return newMode;
  // m.p = Utils.moduloSum(m.p, 2, 12, 0, false);
};

const getAllModes = ({ scale, keyCenter }) => {
  const modes = [];
  for (let i = 1; i <= scale.length; i++) {
    modes.push(getMode({ scale, degree: i }));
  }
  return modes.map((m, i) => ({
    name: `Degree ${i + 1}`,
    a: keyCenter,
    B: m
  }));
};

const getNumeral = ({ scale, keyCenter, degree }) => {
  const i1 = degree;
  const i3 = Utils.moduloSum(degree, 2, scale.length);
  const i5 = Utils.moduloSum(degree, 4, scale.length);
  const i7 = Utils.moduloSum(degree, 6, scale.length);
  const numeral = [scale[i1], scale[i3], scale[i5], scale[i7]];
  return {
    name: `Numeral ${degree + 1}`,
    a: keyCenter,
    B: numeral
  };
};

const getAllNumerals = ({ scale, keyCenter }) => {
  const numerals = [];
  for (let i = 0; i < scale.length; i++) {
    numerals.push(getNumeral({ scale, keyCenter, degree: i }));
  }
  return numerals;
};

export default {
  Preset,
  getNumeral,
  getAllNumerals,
  getMode,
  getAllModes
};
