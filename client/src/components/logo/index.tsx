import { ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link to={url}>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-offset-2 ring-primary transition-all duration-200 ease-in-out transform hover:scale-110 hover:bg-primary/90 hover:ring-primary-light dark:ring-offset-primary dark:hover:ring-primary">
          <ClipboardList className="size-5" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
