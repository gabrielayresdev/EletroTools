export function formatNumber(value: number) {
  if (value >= 1) {
    const prefix = ["", "k", "M", "G"];
    const integer = Math.trunc(value);
    const prefixNumber = Math.floor((`${integer}`.length - 1) / 3);
    const shortNumber = parseFloat(
      (value / Math.pow(1000, prefixNumber)).toPrecision(3)
    );

    return `${shortNumber}${prefix[prefixNumber]}`;
  } else {
    return `${parseFloat(value.toPrecision(3))}`;
  }
}
