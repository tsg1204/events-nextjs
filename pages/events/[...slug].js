import { useRouter } from 'next/router';

export default function FilteredEventsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Filtered Events Page</h1>
    </div>
  );
}
