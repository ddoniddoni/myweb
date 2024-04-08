import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>죄송합니다. 이 페이지는 존재하지 않습니다.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
