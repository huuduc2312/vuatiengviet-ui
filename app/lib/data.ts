export async function searchRhymes(words: string): Promise<string[]> {
  try {
    // TODO: load URL from env
    const resp = await fetch(`http://localhost:8501/tim_van/${words}`);
    const { van }: { van: string } = await resp.json();

    return van?.split("\n") || "";
  } catch (err) {
    console.error("search rhymes error", err);
  }

  return [];
}
