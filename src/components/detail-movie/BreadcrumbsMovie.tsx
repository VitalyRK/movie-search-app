import { Anchor, Breadcrumbs } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface BreadcrumbsMovieProps {
  original_title: string | undefined;
  idParam: string | undefined;
}

function BreadcrumbsMovie({ original_title, idParam }: BreadcrumbsMovieProps) {
  const isMobile = useMediaQuery(`(max-width: 560px)`);

  return (
    <Breadcrumbs
      style={{ alignSelf: "start" }}
      p={{ base: "10px 0", md: 0 }}
      maw={{ base: "300px" }}
    >
      {[
        { title: "Movies", href: "/" },
        { title: original_title ?? idParam!, href: `/movies/${idParam}` },
      ].map((item, index) => (
        <Anchor fz={14} href={item.href} key={index}>
          {item.title?.length > 20 && isMobile
            ? item.title.substring(0, 20) + "..."
            : item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}

export default BreadcrumbsMovie;
