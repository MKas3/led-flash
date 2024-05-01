export const defaultSpinDuration = 2;

export const defaultSpinToStartDuration = 1;

export const defaultColorSaturation = 100;

export const defaultColorLightness = 50;

export const predefinedSmartColors = [
  [0, defaultColorSaturation, defaultColorLightness],
  [50, defaultColorSaturation, defaultColorLightness],
  [100, defaultColorSaturation, defaultColorLightness],
  [150, defaultColorSaturation, defaultColorLightness],
  [200, defaultColorSaturation, defaultColorLightness],
  [250, defaultColorSaturation, defaultColorLightness],
  [300, defaultColorSaturation, defaultColorLightness],
] satisfies [number, number, number][];

export const neonTypesNamings = ['Colors', 'RGB', 'Smart'];

export const neonTypes = ['colors', 'rgb', 'smart'] as const;

export const predefinedColors = [
  [0, 0, 100],
  [47, 100, 85],
  [53, 100, 50],
  [47, 100, 50],
  [25, 96, 46],
  [357, 89, 44],
  [328, 66, 61],
  [292, 32, 38],
  [205, 100, 31],
  [197, 73, 48],
  [183, 100, 37],
  [98, 51, 45],
] satisfies [number, number, number][];

export const predefinedColorsNamings = [
  'белый',
  'теплый белый',
  'желтый',
  'лимонный',
  'оранжевый',
  'красный',
  'розовый',
  'фиолетовый',
  'синий',
  'голубой',
  'бирюзовый',
  'зеленый',
];

export const defaultSpeedModifiers = [0.5, 0.75, 1, 2, 3, 5];
