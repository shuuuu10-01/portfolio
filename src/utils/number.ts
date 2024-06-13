/**
 * 指定された最小値と最大値の間のランダムな整数を返却する
 *
 * @param {number} min - 最小値（含む）
 * @param {number} max - 最大値（含む）
 * @returns {number} minからmaxまでのランダムな整数
 *
 * @example
 * // 1から10の間のランダムな数値を取得
 * const randomNumber = getRandomBetween(1, 10);
 * console.log(randomNumber); // 1から10の間の任意の整数
 */
export function getRandomBetween(min: number, max: number): number {
  const rand = Math.floor(min + (max - min + 1) * Math.random());
  return rand;
}
