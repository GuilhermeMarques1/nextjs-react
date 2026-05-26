import { GetServerSideProps } from "next";

interface SSRPageProps {
  currentTime: string;
}

export default function SSRPage({ currentTime }: SSRPageProps) {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      <h1 className="text-heading-hg text-blue-200">
        Server Side Rendering (SSR)
      </h1>
      <p className="text-gray-200">
        Current time: {currentTime}
      </p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<SSRPageProps> = async () => {
  const currentTime = new Date().toISOString();

  return {
    props: { currentTime },
  }
}
