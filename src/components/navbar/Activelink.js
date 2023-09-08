import { useRouter } from 'next/navigation';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  const style = {
    marginRight: 10,
    color: isActive ? 'red' : 'white',
    textDecoration: isActive ? 'underline' : 'none',
    cursor: 'pointer',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
