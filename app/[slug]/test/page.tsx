import { OptimisticForm } from '@/app/components/optimistic-form';

export const generateMetadata = async ({ params: { slug } }: { params: { slug: string; } }) => {
  return {
    title: slug,
  };
};

export default function Page({ params: { slug } }: { params: { slug: string } }) {

  return (
    <div>
      <p>This is the page for {slug}/test</p>
      <OptimisticForm />
    </div>
  )
}
