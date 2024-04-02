export const NavItem = ({
  content,
  iconClass,
}: {
  content: string;
  iconClass: string;
}) => {
  return (
    <li>
      <a href="#">
        {content}
        {iconClass !== "" && <i className={`${iconClass}`}></i>}
      </a>
    </li>
  );
};
