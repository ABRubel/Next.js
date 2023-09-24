interface Props {
  params: {
    slug: string[];
  };
}

const page = ({ params: { slug } }: Props) => {
  return <div>page {slug}</div>;
};

export default page;