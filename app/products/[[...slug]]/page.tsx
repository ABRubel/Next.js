interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}

const page = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      page {slug} {sortOrder}
    </div>
  );
};

export default page;
