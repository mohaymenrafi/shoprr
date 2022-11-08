import Header from './Header';

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h1>I am page component</h1>
      {children}
    </div>
  );
}
