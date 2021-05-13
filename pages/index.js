import { useRouter } from 'next/router';

export default function StartingPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Starting Page featured Events</h1>
    </div>
  );
}
