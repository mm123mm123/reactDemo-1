type record = {
  selectedTags: number[],
  note: string,
  category: '-' | '+',
  number: string
}

type tag = {
  id: number, name: string
}

type recordWithTime = record & {
  tagName: string[]
  createAt: string
}