/*import { useEffect, useState } from 'react'
import './style/ResidentList.css'
import { pagnationLogic } from '../util/pagInation'
import ResidentCard from './ResidentCard';

const ResidentList = (location) => {

const [currentPage, setCurrentPage] = useState()//pendiente va parametro//

const {pages,residentsIncurrentPage} = pagnationLogic(
  currentPage,
  residents
  );

const handleNewPage = (newPage) => {
  setCurrentPage(newPage)
};

useEffect (() => {
  setCurrentPage(1);
}, [location])

  return (
    <section>
      <section>
        {residentsIncurrentPage.map((location) => (
          <ResidentCard key={location} url={location} />
        ))}
      </section>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <button
              className= {`${currentPage === page}`}
              onClick={() => handleNewPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};


export default ResidentList*/