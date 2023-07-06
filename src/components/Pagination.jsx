import Link from 'next/link';
import Card from '@/components/Card'

const Pagination = ({ currentPage = 1, totalPages = 9, people }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const pages = new Array(totalPages).fill(0).map((_, index) => {
    const pageNumber = index + 1;
    const isActive = pageNumber === currentPage;
    return ( 
      <Link 
        key={`/?page=${pageNumber}`}
        href={`/?page=${pageNumber}`}
        legacyBehavior
      >{pageNumber}</Link>
    );
  });

  return (
      <>
      <div className="w-full flex items-center justify-center gap-4 text-blue-500 mb-10">
        {prevPage && (
          <Link href={`/?page=${prevPage}`} legacyBehavior>
            Anterior
          </Link>
        )}

          {pages}

        {nextPage && (
          <Link href={`/?page=${nextPage}`} legacyBehavior>
            Próxima
          </Link>
        )}
      </div>
      { people.map(({ name, species, birth_year }, index) => (
            <Card key={name} name={name} species={species} birth_year={birth_year} id={index} /> 
        ))} 
      </>
  );
};

export default Pagination;
