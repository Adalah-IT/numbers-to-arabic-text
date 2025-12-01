/**
 * Options for the tafqit function
 */
export interface TafqitOptions {
  /**
   * Generate string for a Feminine subject (أرقام بصيغة المؤنث).
   * Default is Masculine form.
   */
  Feminine?: "on";

  /**
   * Use Mi'ah for Hundreds (مئة بدل مائة).
   * Default is Ma'ah "مائة".
   */
  Miah?: "on";

  /**
   * Insert comma between triplet words.
   */
  Comma?: "on";

  /**
   * Split number from hundred words (فصل الرقم عن المئة).
   * e.g. "ثلاث مائة" instead of "ثلاثمائة".
   */
  SplitHund?: "on";

  /**
   * Use Billions (بليون) instead of Milliard (مليار).
   */
  Billions?: "on";

  /**
   * Indicates that there will be text to follow the resulting text.
   * This permits proper subject name to be added after the resulting text.
   */
  TextToFollow?: "on";

  /**
   * Text is produced in Accusative/Genitive (جر/نصب) case.
   * Default is Nominative case (رفع).
   */
  AG?: "on";

  /**
   * Subject Name to be counted in 4 forms:
   * [0] = Default Name Singular (e.g. "كتاب/تفاحة/دينار")
   * [1] = Name for 2's (double) (e.g. "كتابان/تفاحتان/ديناران")
   * [2] = Name for plural (e.g. "كتب/تفاحات/دنانير")
   * [3] = Name Singular with Tanween (e.g. "كتابًا/تفاحةً/دينارًا")
   */
  Subject?: [string, string, string, string];

  /**
   * Uses the legal form of output text.
   */
  Legal?: "on";

  /**
   * Produces ordinal numbers (الأول، الثاني، الثالث...).
   */
  Ordinal?: "on";
}

/**
 * Converts Numbers to Arabic Words with Grammar Rules
 *
 * @param num - Integer in Numeric or String form. May be in Arabic-Indic format.
 * @param options - Optional configuration options
 * @returns The wordified number string in Arabic
 *
 * @example
 * tafqit(123) // "مائة وثلاثة وعشرون"
 *
 * @example
 * tafqit(2, { Feminine: "on" }) // "اثنتان"
 *
 * @example
 * tafqit(5, { Subject: ["كتاب", "كتابان", "كتب", "كتابًا"] }) // "خمسة كتب"
 */
export function tafqit(num?: number | string, options?: TafqitOptions): string;

