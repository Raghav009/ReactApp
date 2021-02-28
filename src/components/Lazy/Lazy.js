import React, { lazy, Suspense } from 'react';
import { fetchProfileData } from "./fakeApi";
import DisplayHoc from './HOC';
import HoC2 from './HOC2';

const LazyComponent = lazy(() => import('./LazyComponent'));
const resource = fetchProfileData();

const LazyC = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
      <Suspense fallback={<Loading name="Profile" />} >
        <ProfileDetails />
        <Suspense fallback={<Loading name="Posts" />} >
          <ProfileTimeline />
        </Suspense>
      </Suspense>
      <div className="row">
        <DisplayHoc />
      </div>
      <div className="row">
          <HoC2 />
      </div>
    </div>
  )
}

const Loading = ({ name }) => {
  return (
    <div>
      Loading {name}...
    </div>
  )
}

const ProfileDetails = () => {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

const ProfileTimeline = () => {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default LazyC;