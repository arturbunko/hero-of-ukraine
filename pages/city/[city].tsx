import { useRouter } from 'next/router';

const City = () => {
  const router = useRouter();

  const id = router.query.id;

  return (
    <section>
      <h1></h1>
    </section>
  );
};
