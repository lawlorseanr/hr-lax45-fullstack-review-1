import React from 'react';
import ListElement from './ListElement.jsx';

import _ from 'lodash';

const List = ({ students }) => {
  return (
    <div>
      {_.map(students, student => <ListElement key={student._id}student={student}/>)}
    </div>
  );
}


export default List