type DataType = {
  categoryId: number;
  name: string;
};

type PaginationType = (
  items: Array<DataType>,
  pageNumber: number,
  pageSize: number,
) => DataType[];

export const pagination: PaginationType = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  if (startIndex >= items.length) {
    return [];
  }

  return items.slice(startIndex, endIndex);
};
