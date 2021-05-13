import { useRouter } from 'next/router';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

export default function StartingPage() {
  // const router = useRouter();
  // console.log(router.pathname);
  // console.log(router.query);

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
