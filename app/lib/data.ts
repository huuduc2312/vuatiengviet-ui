export async function searchRhymes(words: string): Promise<string[]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(`http://127.0.0.1:8501/tim_van/${words}`);
    const { van }: { van: string } = await resp.json();

    return van?.split("\n") || "";
  } catch (err) {
    console.error("search rhymes error", err);
  }

  return [];
}
