export async function searchRhymes(words: string): Promise<string[]> {
  try {
    const resp = await fetch(
      `http://ec2-52-74-160-204.ap-southeast-1.compute.amazonaws.com/tim_van/${words}`
    );
    const { van }: { van: string } = await resp.json();

    return van?.split("\n") || "";
  } catch (err) {
    console.error("search rhymes error", err);
  }

  return [];
}
