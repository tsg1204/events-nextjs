import { useRouter } from 'next/router';

export default function AllEventsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>All Events Page</h1>
    </div>
  );
}
