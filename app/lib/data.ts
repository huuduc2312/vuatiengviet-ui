export async function searchVanXuoiRhymes(
  term: string,
  termsReceived: number,
): Promise<string[]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(
      `http://127.0.0.1:8501/tim_van/${term}?n_received=${termsReceived}`,
    );

    const { status, van }: { status: string; van: string } = await resp.json();

    return (status == "success" && van?.split("\n")) || [];
  } catch (err) {
    console.error("search 'van-xuoi' rhymes error", err);
  }

  return [];
}

export async function searchVanDaoRhymes(
  words: string,
  termsReceived: number,
): Promise<string[]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(
      `http://127.0.0.1:8501/tim_van_dao/${words}?n_received=${termsReceived}`,
    );

    const { status, van }: { status: string; van: string } = await resp.json();

    return (status == "success" && van?.split("\n")) || [];
  } catch (err) {
    console.error("search 'van-dao' rhymes error", err);
  }

  return [];
}

export async function searchTuLaiRhymes(
  words: string,
  termsReceived: number,
): Promise<[string[], string[]]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(
      `http://127.0.0.1:8501/tim_tu_lai/${words}?n_received=${termsReceived}`,
    );

    const {
      status,
      tieu_chuan,
      tu_do,
    }: { status: string; tieu_chuan: string; tu_do: string } =
      await resp.json();

    const standardTerms = tieu_chuan?.split("\n") || [];
    const freeStyleTerms = tu_do?.split("\n") || [];

    return status == "success" ? [standardTerms, freeStyleTerms] : [[], []];
  } catch (err) {
    console.error("search 'noi-lai' rhymes error", err);
  }

  return [[], []];
}
