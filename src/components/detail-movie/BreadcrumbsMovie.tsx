import { Anchor, Breadcrumbs } from "@mantine/core";

interface BreadcrumbsMovieProps {
  original_title: string | undefined;
  idParam: string | undefined;
}

function BreadcrumbsMovie({ original_title, idParam }: BreadcrumbsMovieProps) {
  return (
    <Breadcrumbs>
      {[
        { title: "Movies", href: "/" },
        { title: original_title ?? idParam, href: `/detail/${idParam}` },
      ].map((item, index) => (
        <Anchor fz={14} href={item.href} key={index}>
          {item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}

export default BreadcrumbsMovie;
