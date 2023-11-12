export async function searchVanXuoiRhymes(
  term: string,
  termsReceived: number,
): Promise<string[]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(
      `http://127.0.0.1:8501/tim_van/${term}?n_received=${termsReceived}`,
    );
    const { van }: { van: string } = await resp.json();

    return van?.split("\n") || "";
  } catch (err) {
    console.error("search rhymes error", err);
  }

  return [];
}

export async function searchVanDaoRhymes(words: string): Promise<string[]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(`http://127.0.0.1:8501/tim_van_dao/${words}`);
    const { van }: { van: string } = await resp.json();

    return van?.split("\n") || "";
  } catch (err) {
    console.error("search rhymes error", err);
  }

  return [];
}

export async function searchTuLaiRhymes(words: string): Promise<string[]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(`http://127.0.0.1:8501/tim_tulai/${words}`);
    const { van }: { van: string } = await resp.json();

    return van?.split("\n") || "";
  } catch (err) {
    console.error("search rhymes error", err);
  }

  return [];
}
