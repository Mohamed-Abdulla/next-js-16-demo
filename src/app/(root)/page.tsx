import { ExploreBtn } from "@/components/explore-btn";

export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />
    </section>
  );
}
